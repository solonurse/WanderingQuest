require 'rails_helper'

RSpec.describe MissionRecord, type: :model do
  describe 'バリデーションチェック' do
    let(:user) { create(:user) }
    it '設定したすべてのバリデーションが機能しているか' do
      mission_record = build(:mission_record, user: user)
      expect(mission_record).to be_valid
    end
    
    it 'titleがない場合にinvalidになるか' do
      mission_record_without_title = build(:mission_record, title: "", user: user)
      expect(mission_record_without_title).to be_invalid
    end

    it 'timerがない場合にinvalidになるか' do
      mission_record_without_timer = build(:mission_record, timer: "", user: user)
      expect(mission_record_without_timer).to be_invalid
    end

    it 'resultがない場合にinvalidになるか' do
      mission_record_without_result = build(:mission_record, result: "", user: user)
      expect(mission_record_without_result).to be_invalid 
    end
  end
end
