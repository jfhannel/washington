class AddPublicFigureToUser < ActiveRecord::Migration
  def change
  	add_column :users, :is_public_figure, :boolean, default: false
  	add_column :users, :is_admin, :boolean, default: false
  end
end
