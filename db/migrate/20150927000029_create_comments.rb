class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :body
      t.integer :upvotes, :default => 0

      t.timestamps null: false
    end
  end
end
