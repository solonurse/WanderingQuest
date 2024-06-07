class AddMissionPictureToMissionRecords < ActiveRecord::Migration[7.1]
  def change
    add_column :mission_records, :mission_picture, :string
  end
end
