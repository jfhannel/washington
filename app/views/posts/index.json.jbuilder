json.posts @posts do |post|
	json.partial! 'posts/post', post: post
	json.author do
		json.partial! 'users/user', user: post.user
	end
	json.comments post.comments do |comment|
		json.partial! 'comments/comment', comment: comment
		json.author do
			json.partial! 'contributors/contributor', contributor: comment.contributor
		end	
	end
	json.answers post.answers do |answer|
		json.partial! 'answers/answer', answer: answer
		json.author do
			json.partial! 'contributors/contributor', contributor: answer.contributor
		end	
	end
	json.public_figures post.public_figures do |figure|
		json.partial! 'public_figures/public_figure', public_figure: figure
	end
end