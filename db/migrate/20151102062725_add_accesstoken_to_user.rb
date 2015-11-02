class AddAccesstokenToUser < ActiveRecord::Migration
  def change
  	add_column :users, :fb_access_token, :string
  	add_column :users, :fb_access_token_expire, :datetime
  end
end
