# lines of code

require 'pry'

filename = ARGV[0]

File.open(filename) do |file|

  puts file.count

end

# binding.pry





