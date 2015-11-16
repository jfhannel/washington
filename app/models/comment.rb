class Comment < ActiveRecord::Base
	belongs_to :post
	belongs_to :contributor, polymorphic: true
	has_many :upvotes, as: :upvotable

end
