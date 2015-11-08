class Answer < ActiveRecord::Base
  belongs_to :post
  belongs_to :answerer, polymorphic: true
  has_many :upvotes, as: :upvotable
end
