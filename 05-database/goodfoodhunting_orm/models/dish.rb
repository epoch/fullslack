class Dish < ActiveRecord::Base  
  has_many :comments
  
  validates :name, presence: true

end



