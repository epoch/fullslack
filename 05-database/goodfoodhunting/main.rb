require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

def run_sql(sql)
  conn = PG.connect(dbname: 'goodfoodhunting')
  result = conn.exec(sql)  
  conn.close
  return result   
end

get '/' do
  sql = "SELECT * FROM dishes;"
  @dishes = run_sql(sql)
  erb :index
end

get '/dishes' do
end

get '/dishes/new' do
  erb :new
end

post '/dishes' do
  sql = "INSERT INTO dishes (name, image_url) VALUES ('#{ params[:name] }', '#{ params[:image_url] }');"
  run_sql(sql)
  redirect '/'
end

# localhost:4567/dishes?id=7
get '/dishes/:id' do
  sql = "SELECT * FROM dishes where id = #{ params[:id] };"
  @dish = run_sql(sql)[0] 
  erb :show
end

delete '/dishes/:id' do
  sql = "DELETE FROM dishes WHERE id = #{params[:id]};"
  run_sql(sql)
  redirect '/'  
end

get '/dishes/:id/edit' do
  @dish = run_sql("SELECT * FROM dishes WHERE id = #{params[:id]}")[0]
  erb :edit
end

put '/dishes/:id' do
  run_sql("UPDATE dishes SET name = '#{params[:name]}', image_url = '#{params[:image_url]}' WHERE id = #{params[:id]};")
  redirect "/dishes/#{params[:id]}"
end






