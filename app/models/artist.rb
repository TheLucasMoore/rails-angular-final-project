class Artist < ActiveRecord::Base
  has_many :artist_users
  has_many :users, through: :artist_users

  def self.parse_from_user(user, array)
    array.each do |artist|
      newbie = Artist.find_or_create_by(name: artist.name)

      newbie.name = artist.name
      newbie.image = artist.images[0]["url"]
      newbie.popularity = artist.popularity
      newbie.link = artist.external_urls["spotify"]
      newbie.uri = artist.uri
      newbie.followers = artist.followers["total"]

      user.artists << newbie

      # GENRES?

      newbie.save
      user.save
    end
  end
end
