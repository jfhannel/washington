class NotableEvent < ActiveRecord::Base
	has_many :notifications
	belongs_to :post
	belongs_to :answer
	belongs_to :upvote
	belongs_to :comment

	def self.createForPost(post)
		event = NotableEvent.new

		event.post = post

		contributors = post.getRelevantContributors()
		contributors.delete(post.user)
		contributors.each do |contributor|
			notification = Notification.new
			notification.contributor = contributor
			notification.notable_event = event
			notification.save
		end

		event.save
	end

	def self.createForComment(comment)
		event = NotableEvent.new

		event.comment = comment

		contributors = comment.post.getRelevantContributors()
		contributors.delete(comment.contributor)
		contributors.each do |contributor|
			notification = Notification.new
			notification.contributor = contributor
			notification.notable_event = event
			notification.save
		end

		event.save
	end

	def self.createForUpvote(upvote)
		event = NotableEvent.new

		event.upvote = upvote

		contributors = upvote.post.getRelevantContributors()
		contributors.delete(upvote.contributor)
		contributors.each do |contributor|
			notification = Notification.new
			notification.contributor = contributor
			notification.notable_event = event
			notification.save
		end

		event.save
	end

	def self.createForAnswer(answer)
		event = NotableEvent.new

		event.answer = answer

		contributors = answer.post.getRelevantContributors()
		contributors.delete(answer.contributor)
		contributors.each do |contributor|
			notification = Notification.new
			notification.contributor = contributor
			notification.notable_event = event
			notification.save
		end

		event.save
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

end
