class CreatePublicFigures < ActiveRecord::Migration
  def change
    create_table :public_figures do |t|
      t.string :name
      t.string :fb_bio
      t.string :fb_about
      t.string :fb_emails
      t.string :fb_page_url
      t.string :fb_gender
      t.boolean :fb_verified
      t.boolean :fb_identity_verified
      t.string :fb_profpic_url

      t.timestamps null: false
    end
  end
end
