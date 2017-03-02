require 'sinatra'
require 'sinatra/reloader'
require 'pry'

# route
get '/hello' do
  # params is a special variable which is hash
  "hello there #{ params[:name] }"
end 


get '/yummy_food' do # request

 erb(:pizza) # response

end

get '/cake' do
  'cake' + 'pudding'
end

# http://localhost:4567/calculator?num1=2&num2=3
get '/calculator' do
  result = params[:num1].to_i + params[:num2].to_i
  # respond with the sum of two numbers
  result.to_s
end
