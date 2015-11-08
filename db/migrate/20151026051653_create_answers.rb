class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.string :body
      t.references :post, index: true, foreign_key: true
      t.integer :answerer_id
      t.string :answerer_type

      t.timestamps null: false
    end
  end
end
