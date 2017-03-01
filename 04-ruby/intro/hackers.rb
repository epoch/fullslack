# user enter a list of full names "Daniel Tsui" separated by comma
# I want to create directories for each first name only lowercased
# /daniel
# and inside each directory create a new file README.md
require 'fileutils' # standard library
require 'pry' # because i need the debugging methods

# "John smith, Mary jane"
puts "enter names separated by common:"
hackers = gets.chomp.split(', ')  # ["John smith", " Mary jane", " full slack"]

hackers.each do |hacker|
  dir_name = hacker.split(' ')[0].downcase().strip
  FileUtils.mkdir dir_name
  FileUtils.cd(dir_name) do
    FileUtils.touch 'README.md'
  end

  index += 1
end

hackers.each do |hacker| # enter a block
  puts hacker + '!'
end

# // higher order functions
# hackers.forEach(function(hacker) {
#   console.log(hacker);
# });




