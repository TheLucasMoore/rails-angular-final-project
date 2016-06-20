class CreateJoinTableUserArtist < ActiveRecord::Migration
  def change
    create_table :artist_users do |t|
      t.integer :user_id
      t.integer :artist_id
      t.string :comment
    end
  end
end
