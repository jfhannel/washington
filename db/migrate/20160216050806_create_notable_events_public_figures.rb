class CreateNotableEventsPublicFigures < ActiveRecord::Migration
  def change
    create_table :notable_events_public_figures do |t|
	  	t.integer :notable_event_id, index: true
	  	t.integer :public_figure_id, index: true
	end
  end
end
