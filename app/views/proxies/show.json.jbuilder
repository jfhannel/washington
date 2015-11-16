json.proxy do
	json.approved @proxy.approved
	json.partial! 'public_figures/public_figure', public_figure: @proxy.public_figure
end