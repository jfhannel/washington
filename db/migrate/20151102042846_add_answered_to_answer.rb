class AddAnsweredToAnswer < ActiveRecord::Migration
  def change
  	add_column :answers, :answered, :boolean
  end
end
