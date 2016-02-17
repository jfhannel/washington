class PublicFigure < ActiveRecord::Base
    has_many :proxies, -> { distinct }
	has_many :users, -> { distinct }, through: :proxies
    has_many :answers, as: :contributor
    has_many :comments, as: :contributor
    has_many :upvotes, as: :contributor
	has_and_belongs_to_many :posts, -> { distinct }
    has_and_belongs_to_many :notable_events, -> { distinct }

	def self.createFromFBid(fb_id, oauth_access_token)
		figure = PublicFigure.create!
		@graph = Koala::Facebook::API.new(oauth_access_token,ENV['FACEBOOK_SECRET'])
        page = @graph.get_object(fb_id, {
            fields: ['id', 'name', 'about', 'picture', 'bio', 'emails', 'is_verified', 'link', 'likes', 'best_page']
          })
        figure[:fb_id] = page['id']
        figure[:name] = page['name']
        figure[:fb_about] = page['about']
        figure[:fb_profpic_url] = (page['picture'] and page['picture']['data'] and page['picture']['data']['url']) ? page['picture']['data']['url'] : nil
        figure[:fb_bio] = page['bio']
        figure[:fb_profile_url] = page['link']
        figure[:fb_emails] = (page['emails'] and page['emails'].length) ? page['emails'].join(',') : nil
        figure[:fb_likes] = page['likes']
        figure[:fb_best_page] = page['best_page']
        figure[:fb_verified] = page['is_verified']
        figure[:verified] = page['is_verified']

        figure.save
        return figure
	end

end
