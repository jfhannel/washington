class CreatePublicFigures < ActiveRecord::Migration
  def change
    create_table :public_figures do |t|
      t.string :name
      t.string :fb_bio
      t.string :fb_about
      t.string :fb_emails
      t.string :fb_profile_url
      t.boolean :fb_verified
      t.boolean :verified, default: false
      t.integer :fb_likes
      t.string :fb_profpic_url
      t.string :fb_id
      t.string :fb_best_page

      t.timestamps null: false
    end
  end
end
