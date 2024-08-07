Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"

  post 'auth/:provider/callback', to: 'api/v1/users#create'
  get 'users/:email', to: 'api/v1/users#show'
  delete 'users/:email', to: 'api/v1/users#destroy'
  post '/avatars/:id', to: 'api/v1/avatars#update'
  get '/mission_records/:id', to: 'api/v1/mission_records#index'
  post '/mission_records/:id', to: 'api/v1/mission_records#create'
  put '/mission_records/:id', to: 'api/v1/mission_records#update'
  delete '/mission_records/:id', to: 'api/v1/mission_records#destroy'
end
