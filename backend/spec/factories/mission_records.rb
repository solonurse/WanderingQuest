FactoryBot.define do
  factory :mission_record do
    title { "タイトル" }
    comment { "コメント" }
    timer { 60 }
    result { ["成功", "失敗"].sample }
    mission_picture { "https://example.com/mission.jpg" }

    association :user
  end
end
