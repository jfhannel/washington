class CreateUpvotes < ActiveRecord::Migration
  def change
    create_table :upvotes do |t|
      t.integer :upvotable_id
      t.string :upvotable_type
      t.references :user, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
