class MissionRecord < ApplicationRecord
  mount_uploader :mission_picture, PictureUploader

  belongs_to :user
end
