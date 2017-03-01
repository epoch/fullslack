require 'pry'

secret_number = Random.rand(1..10)

# guess = gets.chomp.to_i

while (gets.chomp.to_i) != secret_number do
  if guess < secret_number
    puts 'you fail life guess higher'
  else
    puts 'you fail guess lower'
  end

  # guess = gets.chomp.to_i
end

puts 'you are doing ok'