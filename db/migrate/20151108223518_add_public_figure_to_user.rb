class AddPublicFigureToUser < ActiveRecord::Migration
	create_table :proxies do |t|
      t.belongs_to :public_figure, index: true
      t.belongs_to :user, index: true
      t.boolean :approved, default: false
      t.timestamps null: false
    end
end
