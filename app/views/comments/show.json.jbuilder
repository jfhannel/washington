json.comment do
	json.partial! 'comment', comment: @comment
	json.author do
		json.partial! 'users/contributor', contributor: @comment.contributor
	end
end