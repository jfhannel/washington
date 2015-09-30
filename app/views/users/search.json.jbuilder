json.posts @results do |post|
	json.partial! 'posts/post', post: post
	json.author do
		json.partial! 'users/user', user: post.user
	end
	json.comments post.comments do |comment|
		json.partial! 'comments/comment', comment: comment
	end
end