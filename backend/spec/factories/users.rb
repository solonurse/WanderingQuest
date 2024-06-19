FactoryBot.define do
  factory :user do
    provider { ["google", "credentials", "github"].sample }
    sequence(:uid) { |n| "uid#{n}" }
    name { "テストユーザー" }
    sequence(:email) { |n| "example#{n}@example.com" }
    avatar { "https://example.com/avatar.jpg" }
    # providerがcredentialsの場合はtrue、それ以外の場合はfalse
    is_guest { provider == "credentials" }
  end
end
