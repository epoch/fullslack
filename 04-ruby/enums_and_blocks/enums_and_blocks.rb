require 'pry'

song = {
  title: 'hello',
  released: 1980
}

numbers = [2,5,7,4,9]

hackers_list = ['john smith', 'mary jane', 'jon snow']
# ['JOHN SMITH', etc...]
# ['john', 'mary', 'jon']

# map - transform

new_arr = hackers_list.map do |hacker|

  hacker.upcase

end

# between the do end - blocks

binding.pry