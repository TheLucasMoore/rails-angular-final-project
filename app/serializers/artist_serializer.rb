class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :streams, :link, :followers, :uri
end
