class AnswersController < ApplicationController

	def create
		post = Post.find(params[:post_id])

		answer = post.answers.new
		answer.body = params[:body]
		answer.contributor_id = params[:contributor][:id]
		answer.contributor_type = params[:contributor][:type]
		answer.save

		@post = post
		render 'posts/show'
	end

	def show
		@answer = Answer.find(params[:id])
	end

	def upvote
		answer = Answer.find(params[:id])
		if Upvote.exists(answer, current_user)
			raise "already upvoted"
		end
		up = Upvote.new
		answer.upvotes << up
		current_user.upvotes << up
		up.save
		@answer = answer
	end

	private
	def answer_params
		params.require(:answer).permit(:body, contributor: [:id, :type])
	end

end
