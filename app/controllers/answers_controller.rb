class AnswersController < ApplicationController

	def create
		if current_user.is_admin
			answer = Answer.create(post_params)
			current_user.answers << answer;
			answer.save
			@answer = answer
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
	def post_params
		params.require(:answer).permit(:body)
	end

end
