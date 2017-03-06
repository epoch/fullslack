require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg'

get '/' do
  # connect to the database
  conn = PG.connect(dbname: 'lead_gen_app')
  # execute a select sql statement
  @leads = conn.exec("SELECT * FROM leads;")
  # close connection
  conn.close
  
  # @leads = [{
  #   name: 'jon', 
  #   email: 'jon@snow.com', 
  #   age: 29
  # }]
  
  erb :index
end