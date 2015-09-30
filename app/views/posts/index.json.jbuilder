json.posts @posts do |post|
	json.partial! 'post', post: post
	json.author do
		json.partial! 'users/user', user: post.user
	end
	json.comments post.comments do |comment|
		json.partial! 'comments/comment', comment: comment
	end
end