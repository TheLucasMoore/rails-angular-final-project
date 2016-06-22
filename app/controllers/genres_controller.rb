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

    if @artist.genres.include?(@genre)
      render :json => @genre
    else
      @artist.artist_genres.build(:genre => @genre)
      @artist.save
      render :json => @genre
    end
  end
end
