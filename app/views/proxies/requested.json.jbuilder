json.requests @requests do |request|
	json.user do
		json.partial! 'users/user', user: request['user']
	end
	json.proxies request['proxies'] do |proxy|
		json.approved proxy.approved
		json.partial! 'public_figures/public_figure', public_figure: proxy.public_figure
	end
end