class ArtistsController < ApplicationController

  def index
    @artists = Artist.all
    render :json => @artists
  end

  def show
    @artist = Artist.find(params[:id])
    render :json => @artist
  end

  def update
    @artist = Artist.find(params[:id])
    count = params["_json"]
    @artist.update(streams: count)
    @artist.save
  end

  def create
    @artist = Artist.find(params[:artist_id])
    @user = current_user
    @comment = params[:comment]

    @artist.artist_users.build(:user => @user, :comment => @comment, :uid => @user.uid)
    @artist.save
  end
  
end
