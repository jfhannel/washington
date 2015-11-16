json.public_figures @results do |public_figure|
	json.partial! 'public_figure', public_figure: public_figure
end