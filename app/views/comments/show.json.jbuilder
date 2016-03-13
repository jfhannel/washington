json.comment do
	json.partial! 'comment', comment: @comment
	json.author do
		json.partial! 'contributors/contributor', contributor: @comment.contributor
	end
end