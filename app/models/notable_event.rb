class NotableEvent < ActiveRecord::Base
	has_and_belongs_to_many :public_figures, -> { distinct }
	has_and_belongs_to_many :users, -> { distinct }
	has_one :post
	has_one :answer
	has_one :upvote
	has_one :comment

	def self.createForAnswer(answer)
		event = NotableEvent.new

		event.answer = answer

		answer.post.public_figures.each do |figure|
			event.addContributor(figure)
		end

		event.users << answer.post.user

		answer.post.comments.each do |comment|
			if comment.user != answer.user
				event.users << user
			end
		end

		answer.post.answers.each do |answer|
		end

		answer.post.upvotes.each do |upvote|
		end
	end

	def sourceContributor()
		if self.answer
			return self.answer.contributor
		elsif self.comment
			return self.comment.contributor
		elsif self.upvote
			return self.upvote.contributor
		elsif self.post
			return self.post.contributor
		else
			return nil
		end
	end

	def addContributor(contributor)

	end

end
