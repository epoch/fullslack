class DishesController < ApplicationController

  def index
    @dishes = Dish.all
  end

  def new
  end

  def create
    dish = Dish.new
    dish.name = params[:name]
    dish.image_url = params[:image_url]
    if dish.save
      redirect_to '/dishes'
    else
      render :new
    end
  end

  def destroy
    dish = Dish.find(params[:dish_id])
    if dish.destroy
      redirect_to '/dishes'
    else
      render :index
    end
  end

end