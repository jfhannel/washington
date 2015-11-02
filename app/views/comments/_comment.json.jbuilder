json.(comment, :id, :body)
	json.created_at comment.created_at.strftime('%m/%d/%Y')
	json.upvotes comment.upvotes.length