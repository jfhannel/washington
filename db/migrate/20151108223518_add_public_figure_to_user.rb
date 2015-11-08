class AddPublicFigureToUser < ActiveRecord::Migration
	create_table :public_figure_users, id: false do |t|
	  	t.belongs_to :public_figures, index: true
	  	t.belongs_to :users, index: true
	end
end
