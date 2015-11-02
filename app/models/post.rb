class Post < ActiveRecord::Base
	belongs_to :user
	has_many :comments
	has_many :answers
	has_many :upvotes, as: :upvotable

end
