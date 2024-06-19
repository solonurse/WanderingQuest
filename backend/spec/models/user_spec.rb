require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'バリデーションチェック' do
    it '設定したすべてのバリデーションが機能しているか' do
      user = build(:user)
      expect(user).to be_valid
    end
    
    it 'nameがない場合にinvalidになるか' do
      user_without_name = build(:user, name: "")
      expect(user_without_name).to be_invalid
    end

    it 'emailがない場合にinvalidになるか' do
      user_without_email = build(:user, email: "")
      expect(user_without_email).to be_invalid
    end

    it 'uidがない場合にinvalidになるか' do
      user_without_uid = build(:user, uid: "")
      expect(user_without_uid).to be_invalid
    end

    it 'is_guestがない場合にinvalidになるか' do
      user_without_is_guest = build(:user, is_guest: "")
      expect(user_without_is_guest).to be_invalid
    end
  end
end
