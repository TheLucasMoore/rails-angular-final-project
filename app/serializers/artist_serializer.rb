class ArtistSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :streams
end
