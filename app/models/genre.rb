class Genre < ActiveRecord::Base
  has_many :artist_genres
  has_many :artists, through: :artist_genres

  # passed in from Users::OmniauthCallbacksController
  def self.scrape_genres(artist_array)
    # raise artist_array.inspect
    artist_array.each do |item|
      artist = Artist.find_by(name: item.name)
      genres = item.genres

      genres.each do |genre_obj|
        genre = Genre.find_or_create_by(name: genre_obj)
        artist.genres << genre unless artist.genres.include?(genre)
        artist.save
      end
    end
  end
end
