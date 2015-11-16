class Post < ActiveRecord::Base
	belongs_to :user
	has_many :comments
	has_many :answers
	has_many :upvotes, as: :upvotable
	has_and_belongs_to_many :public_figures, -> { distinct }
end
