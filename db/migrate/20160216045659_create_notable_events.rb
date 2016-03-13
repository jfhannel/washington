class CreateNotableEvents < ActiveRecord::Migration
  def change
    create_table :notable_events do |t|
      t.references :post, index: true, foreign_key: true
      t.references :comment, index: true, foreign_key: true
      t.references :answer, index: true, foreign_key: true
      t.references :upvote, index: true, foreign_key: true
      t.integer :contributor_id
      t.string :contributor_type

      t.column :created_at, :datetime
    end
  end
end
