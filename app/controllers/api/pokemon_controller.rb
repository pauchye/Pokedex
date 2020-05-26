class Api::PokemonController < ApplicationController

  def index
    @pokemons = Pokemon.all
    render :index # do we need to skip these since we specified it in our routes?
  end 

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show # do we need to skip these since we specified it in our routes?
  end 
end 
