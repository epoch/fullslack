require 'pry'

# ruby by default is all local variables

# template make a fish
# custom type
class Fish

  def initialize(new_name)
    # it will auto run when you make a fish

    # scope of this variable is local to this method
    # name = 'dory'

    # increase the scope
    # instance variable
    @name = new_name
    @health = 100 
  end

  def sleep
    @health += 10
  end

  def get_name
    return @name
  end

  def set_name(new_name)
    @name = new_name
  end

  def jump_around
    "jumping"
  end

end

binding.pry