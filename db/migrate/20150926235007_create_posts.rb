class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
      t.string :body
      t.integer :upvotes, :default => 0

      t.timestamps null: false
    end
  end
end
