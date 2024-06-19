class User < ApplicationRecord
  mount_uploader :avatar, PictureUploader

  has_many :mission_records, dependent: :destroy

  validates :provider, presence: true
  validates :uid, presence: true
  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
  validates :is_guest, inclusion: { in: [true, false] }
end
