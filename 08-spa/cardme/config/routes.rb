Rails.application.routes.draw do

  # get '/api/cards', to: 'api/cards#index'
  # delete '/api/cards', to: 'api/cards#destroy'

  namespace :api do
    resources :cards # , except: [:destroy]
  end

  root 'pages#home'

end
