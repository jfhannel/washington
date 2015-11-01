class AddFBfieldsToUser < ActiveRecord::Migration
  def change
  	add_column :users, :fb_about, :string
  	add_column :users, :fb_bio, :string
  	add_column :users, :fb_profile_url, :string
  	add_column :users, :fb_gender, :string
  	add_column :users, :fb_verified, :boolean
  	add_column :users, :fb_identity_verified, :boolean
  	add_column :users, :fb_profpic_url, :string
  	add_column :users, :fb_age_min, :integer
  end
end
