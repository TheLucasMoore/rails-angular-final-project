class AddUidToArtistUsers < ActiveRecord::Migration
  def change
    add_column :artist_users, :uid, :string
  end
end
