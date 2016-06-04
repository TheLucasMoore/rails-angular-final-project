class CreateUserArtists < ActiveRecord::Migration
  def change
    create_join_table :user, :artist, table_name: :artist_users do |t|
      t.index :user_id
      t.index :artist_id
      end
    end
end
