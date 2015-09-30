json.comment do
	json.partial! 'comment', comment: @comment
	json.author do
		json.partial! 'users/user', user: @comment.user
	end
end