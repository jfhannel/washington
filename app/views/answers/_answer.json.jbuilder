json.(answer, :id, :body)
	json.created_at answer.created_at.strftime('%m/%d/%Y')
	json.upvotes answer.upvotes.length