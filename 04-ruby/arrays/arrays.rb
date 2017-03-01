require 'pry'

# days_of_the_week = 'mon tue wed thurs fri sat sun'.split(' ')
days_of_the_week = %w(mon tue wed thurs fri sat sun)

# last_day = days_of_the_week.pop
days_of_the_week.unshift( days_of_the_week.pop )


new_arr = days_of_the_week.rotate(-2).drop(2)
new_arr2 = days_of_the_week.drop(5)
finish_arr = [new_arr, new_arr2]

binding.pry
# days_of_the_week = [%w|mon tue wed thurs fri|, %w{sat sun}]

# binding.pry
# days_of_the_week.pop

# puts days_of_the_week.flatten.sort.join(', ')



