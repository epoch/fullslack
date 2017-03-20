Rails.application.routes.draw do


                      # controller name, method/action
  get '/about', to: 'pages#about'

  get '/dishes', to: 'dishes#index'
  get '/dishes/new', to: 'dishes#new' # getthing the form
  post '/dishes', to: 'dishes#create'
  delete '/dishes', to: 'dishes#destroy'




end
