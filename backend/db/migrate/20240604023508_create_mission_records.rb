class CreateMissionRecords < ActiveRecord::Migration[7.1]
  def change
    create_table :mission_records do |t|
      t.string :title
      t.string :comment
      t.integer :timer
      t.string :result
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
