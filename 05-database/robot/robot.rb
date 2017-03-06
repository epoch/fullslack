require 'pry'

class Robot
  attr_reader :name

  def initialize
    @name = "#{prefix}#{suffix}"
  end

  def prefix
    ('aa'..'zz').to_a.sample
  end 

  def suffix
    ('000'..'999').to_a.sample
  end

  def reset
    @name = "#{prefix}#{suffix}"
  end

end

binding.pry