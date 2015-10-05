class Upvote < ActiveRecord::Base
  belongs_to :user
  belongs_to :commentable, polymorphic: true

  def self.exists(upvotable, user)
  	upvotable.upvotes.each do |up|
  		if up.user == user
  			return true
   		end
  	end
  	return false
  end
end
