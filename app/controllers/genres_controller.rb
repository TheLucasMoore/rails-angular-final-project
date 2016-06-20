class GenresController < ApplicationController

  def index
    @genres = Genre.all
    render :json => @genres
  end

  def show
    @genre = Genre.find(params[:id])
    render :json => @genre
  end

  def create
    @genre = Genre.find_or_create_by(name: params[:genre])
    @artist = Artist.find(params[:id])

    @artist.genres << @genre unless @artist.genres.include?(@genre)
  end
end
