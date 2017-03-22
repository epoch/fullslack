class LikesController < ApplicationController

  def create
    like = Like.new
    like.dish_id = params[:dish_id]
    like.user_id = session[:user_id]
    like.save
    redirect_to "/"
  end

  def api_create
    like = Like.new
    like.dish_id = params[:dish_id]
    like.user_id = session[:user_id]
    like.save
    render json: { likes_count: like.dish.likes.count }    
  end

end