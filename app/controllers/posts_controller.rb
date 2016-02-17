class PostsController < ApplicationController

	def index
		@posts = Post.all
	end

	def search
	    query = params[:query]
	    
	    if query.nil?
	    	query = ''
	    end

	    if query.empty?
	      @results = []
	    else
	      @results = Post.where("body ILIKE ?", '%'+query+'%').all.to_a + Post.where("title ILIKE ?", '%'+query+'%').all.to_a
	    end
	end

	def create
		post = Post.new
		post.title = post_params[:title]
		post.body = post_params[:body]
		post.save
		current_user.posts << post;
		params[:figures].each do |f|
			if f[:id].nil?
				fig = PublicFigure.createFromFBid(f[:fb_id], current_user[:fb_access_token])
			else
				fig = PublicFigure.find(f[:id])
			end
	
			fig.posts << post
			fig.save
		end
		@post = post
		render 'show'
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
		render 'show'
	end

	private
	def post_params
		params.require(:post).permit(:body, :title, figures: [:id, :fb_id, :name, :fb_profile_url, :fb_profpic_url, :fb_bio, :fb_about, :fb_emails])
	end

end
