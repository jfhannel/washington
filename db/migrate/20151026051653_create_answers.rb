class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.string :body
      t.references :post, index: true, foreign_key: true
      t.integer :contributor_id
      t.string :contributor_type

      t.timestamps null: false
    end
  end
end
