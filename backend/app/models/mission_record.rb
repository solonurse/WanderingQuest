class MissionRecord < ApplicationRecord
  mount_uploader :mission_picture, PictureUploader

  belongs_to :user

  validates :title, presence: true
  validates :timer, presence: true
  validates :result, presence: true
end
