require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'
require_relative 'database_config'
require_relative 'models/dish'
require_relative 'models/user'

enable :sessions

helpers do

  def current_user
    User.find_by(id: session[:user_id])
  end

  def logged_in? # should return a boolean
    !!current_user
  end

end

after do
  ActiveRecord::Base.connection.close
end

get '/' do
  @dishes = Dish.all
  erb :index
end

get '/dishes' do
end

get '/dishes/new' do
  erb :new
end

post '/dishes' do
  dish = Dish.new
  dish.name = params[:name]
  dish.image_url = params[:image_url]

  if dish.save
    redirect '/'
  else
    erb :new
  end
end

# localhost:4567/dishes?id=7
get '/dishes/:id' do
  @dish = Dish.find(params[:id])
  erb :show
end

delete '/dishes/:id' do
  dish = Dish.find(params[:id])
  dish.destroy

  redirect '/'  
end

get '/dishes/:id/edit' do
  redirect '/session/new' if !logged_in?

  @dish = Dish.find(params[:id])
  erb :edit
end

put '/dishes/:id' do
  redirect '/session/new' if !logged_in?
  
  dish = Dish.find(params[:id])
  dish.name = params[:name]
  dish.image_url = params[:image_url]
  dish.save
  redirect "/dishes/#{params[:id]}"
end

get '/session/new' do
  erb :login
end

post '/session' do
  user = User.find_by(email: params[:email])
  if user && user.authenticate(params[:password])
    # you are ok, let me create a session for you
    session[:user_id] = user.id
    redirect '/'
  else
    # who are you???
    erb :login
  end
end

# logout
delete '/session' do
  session[:user_id] = nil
  redirect '/session/new'
end









