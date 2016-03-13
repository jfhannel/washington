class Comment < ActiveRecord::Base
	belongs_to :post
	belongs_to :contributor, polymorphic: true
	has_many :upvotes, as: :upvotable
	has_many :notable_events, -> { distinct }
	before_save :make_nofication

	private
		def make_nofication
			if Comment.find_by_id(self[:id]).nil?
				NotableEvent.createForComment(self)
			end
		end
end