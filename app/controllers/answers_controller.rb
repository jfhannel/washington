class AnswersController < ApplicationController

	def create
		if current_user.is_public_figure || current_user.is_admin
			post = Post.find(params[:post_id])
			answer = post.answers.find_by(user_id: current_user[:id])
			answer.body = answer_params[:body]
			answer.answered = true
			answer.save
			@post = post
		end
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
