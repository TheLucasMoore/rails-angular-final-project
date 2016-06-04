class GenreSerializer < ActiveModel::Serializer
  attributes :id, :name, :url
  has_many :artists
end
