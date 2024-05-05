class ChangeColumnToNotNull < ActiveRecord::Migration[7.1]
  def up
    change_column :users, :email,:string, null: false
  end

  def down
    change_column :users, :email,:string
  end
end
