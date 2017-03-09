require 'active_record'

options = {
  adapter: 'postgresql',
  database: 'goodfoodhunting',
  username: 'daniel'
}

ActiveRecord::Base.establish_connection(options)