class PostsController < ApplicationController

	def index
		@posts = Post.all
	end

	def search
	    query = params[:query]
	    if query.empty?
	      @results = []
	    else
	      @results = Post.where("body ILIKE ?", '%'+query+'%').all.to_a
	    end
	end

	def create
		post = Post.create(post_params)
		current_user.posts << post;
		params[:figures].each do |f|
			p f
			return
			a = Answer.new
			a.post = post
			a.user = User.find(f[:id])
			a.answered = false
			a.save
		end
		post.save
		@post = post
	end

	def show
		@post = Post.find(params[:id])
	end

	def upvote
		post = Post.find(params[:id])
		if Upvote.exists(post, current_user)
			raise "already upvoted"
		end
		up = Upvote.new
		post.upvotes << up
		current_user.upvotes << up
		up.save
		@post = post
	end

	private
	def post_params
		params.require(:post).permit(:body, :title)
	end

end
