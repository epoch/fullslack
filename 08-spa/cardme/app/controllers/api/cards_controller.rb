
class Api::CardsController < ApplicationController

  def index
    render json: Card.all
  end

  def create
    render json: { hi: 'there' }
  end

  def destroy
    card = Card.find(params[:id])
    if card.destroy
      render json: card
    else
      render json: card.errors
    end
  end
  
end

