class CreateTableNotableEventsUsers < ActiveRecord::Migration
  def change
    create_table :notable_events_users, id: false do |t|
	  	t.integer :notable_event_id, index: true
	  	t.integer :user_id, index: true
	end
  end
end
