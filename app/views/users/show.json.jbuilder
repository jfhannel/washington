json.user do
	json.partial! 'users/user', user: @user
	json.proxies @user.proxies do |proxy|
		json.approved proxy.approved
		json.partial! 'public_figures/public_figure', public_figure: proxy.public_figure
	end
end