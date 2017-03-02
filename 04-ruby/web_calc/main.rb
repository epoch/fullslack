require 'pry'
require 'sinatra'
require 'sinatra/reloader'

get '/' do
  erb :index
end

get '/calc' do
  @magic_number = params[:num1].to_i + params[:num2].to_i
  erb :result
end

get '/about' do
  erb :about
end

get '/donate' do
  erb :donate
end