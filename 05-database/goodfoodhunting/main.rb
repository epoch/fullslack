require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
  erb :index
end

get '/dishes' do
end

get '/dishes/new' do
  erb :new
end

post '/dishes' do
  conn = PG.connect(dbname: 'goodfoodhunting')
  sql = "INSERT INTO dishes (name, image_url) VALUES ('#{ params[:name] }', '#{ params[:image_url] }');"
  conn.exec(sql)
  conn.close
  redirect '/'
end





