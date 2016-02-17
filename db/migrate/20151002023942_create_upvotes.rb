class CreateUpvotes < ActiveRecord::Migration
  def change
    create_table :upvotes do |t|
      t.integer :upvotable_id
      t.string :upvotable_type
      t.integer :contributor_id
      t.string :contributor_type

      t.timestamps null: false
    end
  end
end
