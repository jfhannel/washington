class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :body
      t.integer :contributor_id
      t.string :contributor_type

      t.timestamps null: false
    end
  end
end
