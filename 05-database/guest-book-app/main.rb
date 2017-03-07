require 'pry'     
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
  conn = PG.connect(dbname: 'guest_book_app')  
  @comments = conn.exec("SELECT * FROM comments;")
  conn.close
  erb :index
end

post '/comments' do
  conn = PG.connect(dbname: 'guest_book_app')
  sql = "INSERT INTO comments(name, body, url) 
VALUES ('#{ params[:name] }', '#{ params[:comment] }', '#{ params[:url] }');" 
  conn.exec(sql)
  conn.close
  redirect '/'
end





