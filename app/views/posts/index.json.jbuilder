json.posts @posts do |post|
	json.partial! 'post', post: post
	json.author do
		json.partial! 'users/user', user: post.user
	end
	json.comments post.comments do |comment|
		json.partial! 'comments/comment', comment: comment
		json.author do
			json.partial! 'users/user', user: comment.user
		end	
	end
	json.answers post.answers do |answer|
		json.partial! 'answers/answer', answer: answer
		json.author do
			json.partial! 'users/user', user: answer.user
		end	
	end
end