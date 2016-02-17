class CreateNotableEvents < ActiveRecord::Migration
  def change
    create_table :notable_events do |t|
      t.references :post
      t.references :comment
      t.references :answer
      t.references :upvote

      t.timestamps null: false
    end
  end
end
