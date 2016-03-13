class Post < ActiveRecord::Base
	belongs_to :user
	has_many :comments
	has_many :answers
	has_many :upvotes, as: :upvotable
	has_and_belongs_to_many :public_figures, -> { distinct }
	has_many :notable_events, -> { distinct }
	before_save :make_nofication

	def getRelevantContributors
		contributors = []

		# author
		contributors << self.user

		# tagged public figures
		self.public_figures.each do |figure|
			contributors << figure
		end

		# commenters
		self.comments.each do |comment|
			contributors << comment.contributor
		end

		# upvoters
		self.upvotes.each do |upvote|
			contributors << upvote.contributor
		end

		# answerers
		self.answers.each do |answer|
			contributors << answer.contributor
		end

		return contributors
	end

	private
		def make_nofication
			if Post.find_by_id(self[:id]).nil?
				NotableEvent.createForPost(self)
			end
		end
end