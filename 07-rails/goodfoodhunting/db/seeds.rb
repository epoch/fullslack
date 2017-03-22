Dish.destroy_all

u = User.first

food = ['cake', 'pudding', 'nuts', 'muffin', 'tart']

11.times do |num|

  Dish.create({ 
    name: "#{food.sample} #{food.sample}", 
    image_url: 'https://placeholdit.imgix.net/~text?txtsize=75&txt=800%C3%97800&w=800&h=800', 
    user_id: u.id
  })

end