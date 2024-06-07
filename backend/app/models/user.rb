class User < ApplicationRecord
  mount_uploader :avatar, PictureUploader

  has_many :mission_records
end
