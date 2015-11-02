json.(post, :id, :body, :title)
json.created_at post.created_at.strftime('%m/%d/%Y')
json.upvotes post.upvotes.length