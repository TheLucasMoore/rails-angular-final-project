class ArtistUser < ActiveRecord::Base
  belongs_to :artist
  belongs_to :user
end