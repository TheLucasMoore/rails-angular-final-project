class Artist < ActiveRecord::Base
  has_many :artist_users
  has_many :users, through: :artist_users

  has_many :artist_genres
  has_many :genres, through: :artist_genres

  # passed in from Users::OmniauthCallbacksController
  def self.parse_from_user(user, array)
    array.each do |artist|
      new_artist = Artist.find_or_create_by(name: artist.name)

      new_artist.name = artist.name
      new_artist.image = artist.images[0]["url"]
      new_artist.popularity = artist.popularity
      new_artist.link = artist.external_urls["spotify"]
      new_artist.uri = artist.uri
      new_artist.followers = artist.followers["total"]

      new_artist.artist_users.build(user: user) unless user.artists.include?(new_artist)
      # user.artists << new_artist unless user.artists.include?(new_artist)
      # # user.artist_users.build(:artist => new_artist)
      # new_artist.save # When this happens
      # user.save
      new_artist.save
    end
  end
end
