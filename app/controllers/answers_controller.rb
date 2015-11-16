class AnswersController < ApplicationController

	def create
		post = Post.find(params[:post_id])
		answer = post.answers.create!(user_id: current_user[:id])
		answer.body = answer_params[:body]
		answer.save
		@post = post
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
		params.require(:answer).permit(:body)
	end

end
