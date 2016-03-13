class Upvote < ActiveRecord::Base
  belongs_to :contributor, polymorphic: true
  belongs_to :upvotable, polymorphic: true
  has_many :notable_events, -> { distinct }
  before_save :make_nofication

  private
    def make_nofication
      if Upvote.find_by_id(self[:id]).nil?
        NotableEvent.createForUpvote(self)
      end
    end

  def self.exists(upvotable, user)
  	upvotable.upvotes.each do |up|
  		if up.user == user
  			return true
   		end
  	end
  	return false
  end
end