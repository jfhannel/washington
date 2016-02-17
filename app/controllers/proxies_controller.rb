class ProxiesController < ApplicationController

	def index
		@proxies = Proxy.all
	end

	def show
		@proxy = Proxy.find(params[:id])
	end

	def requested
		@requests = []

		if not current_user.is_admin
			render 'proxies/requested'
		end

		User.all.each do |user|
			proxies = user.getRequestedProxies()
			if not proxies.empty?
				request = {}
				request['user'] = user
				request['proxies'] = proxies
				@requests << request
			end
		end

		render 'proxies/requested'
	end

end
