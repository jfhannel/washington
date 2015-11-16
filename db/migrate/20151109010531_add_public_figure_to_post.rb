class AddPublicFigureToPost < ActiveRecord::Migration
  	create_table :posts_public_figures, id: false do |t|
	  	t.integer :public_figure_id, index: true
	  	t.integer :post_id, index: true
	end
end
