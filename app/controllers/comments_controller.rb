class CommentsController < ApplicationController

	def create
		post = Post.find(params[:post_id])
		comment = post.comments.new
		comment.body = params[:body]
		comment.contributor_id = params[:contributor][:id]
		comment.contributor_type = params[:contributor][:type]
		comment.save
		@post = post
		render 'posts/show'
	end

	def upvote
		post = Post.find(params[:post_id])
		comment = post.comments.find(params[:id])
		comment.increment!(:upvotes)

		respond_with post, comment
	end

	private
	def comment_params
		params.require(:comment).permit(:body, contributor: [:id, :type])
	end

end
