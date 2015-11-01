class Answer < ActiveRecord::Base
  belongs_to :post
  belongs_to :user
  has_many :upvotes, as: :upvotable
end
