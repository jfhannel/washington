class CreateNotifications < ActiveRecord::Migration
  def change
    create_table :notifications do |t|
		t.integer :contributor_id
    	t.string :contributor_type
    	t.references :notable_event, index: true, foreign_key: true

    	t.column :created_at, :datetime
    end
  end
end
