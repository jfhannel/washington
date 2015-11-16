class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :omniauthable
  has_many :posts
  has_many :answers, as: :answerer
  has_many :comments
  has_many :upvotes
  has_many :proxies, -> { distinct }
  has_many :public_figures, -> { distinct }, through: :proxies

  TEMP_EMAIL_PREFIX = 'change@me'
  TEMP_EMAIL_REGEX = /\Achange@me/

  validates_format_of :email, :without => TEMP_EMAIL_REGEX, on: :update

  def fb_token_good
    return (self.fb_access_token_expire - Time.now)/(60.0*60.0*24) > 1.0/24.0
  end

  def self.find_for_oauth(auth, signed_in_resource = nil)

    # Get the identity and user if they exist
    identity = Identity.find_for_oauth(auth)

    # If a signed_in_resource is provided it always overrides the existing user
    # to prevent the identity being locked with accidentally created accounts.
    # Note that this may leave zombie accounts (with no associated identity) which
    # can be cleaned up at a later date.
    user = signed_in_resource ? signed_in_resource : identity.user

    # Create the user if needed
    if user.nil?

      # Get the existing user by email if the provider gives us a verified email.
      # If no verified email was provided we assign a temporary email and ask the
      # user to verify it on the next step via UsersController.finish_signup
      email_is_verified = auth.info.email && (auth.info.verified || auth.info.verified_email)
      email = auth.info.email if email_is_verified
      user = User.where(:email => email).first if email

      # Create the user if it's a new registration
      if user.nil?
        user = User.new(
          name: auth.info.name,
          fb_profile_url: auth.extra.raw_info.link,
          fb_about: auth.info.about,
          fb_bio: auth.info.bio,
          fb_age_min: auth.extra.raw_info.age_range.min ? auth.extra.raw_info.age_range.min[1] : nil,
          fb_profpic_url: auth.info.image,
          fb_gender: auth.extra.raw_info.gender,
          fb_verified: auth.info.verified,
          fb_identity_verified: auth.extra.raw_info.is_verified,
          is_admin: auth.uid == "10207044223211420" ? true : false,
          #username: auth.info.nickname || auth.uid,
          email: auth.info.email,
          password: Devise.friendly_token[0,20],
          fb_access_token: auth.credentials.token,
          fb_access_token_expire: DateTime.strptime((auth.credentials.expires_at.to_f).to_s, '%s')
        )
        #user.skip_confirmation!
        user.save!
      end
    end

    # Associate the identity with the user if needed
    if identity.user != user
      identity.user = user
      identity.save!
    end
    user
  end

  def email_verified?
    self.email && self.email !~ TEMP_EMAIL_REGEX
  end
end