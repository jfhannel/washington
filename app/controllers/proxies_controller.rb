class ProxiesController < ApplicationController

	def index
		@proxies = Proxy.all
	end

	def show
		@proxy = Proxy.find(params[:id])
	end

end
