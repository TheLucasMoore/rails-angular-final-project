class CreateArtistGenreTable < ActiveRecord::Migration
  def change
    create_join_table :artist, :genre, table_name: :artist_genres do |t|
      t.index :artist_id
      t.index :genre_id
      t.string :comment
    end
  end
end
