class AddDataToArtists < ActiveRecord::Migration
  def change
    add_column :artists, :link, :string
    add_column :artists, :followers, :integer
    add_column :artists, :popularity, :integer
    add_column :artists, :uri, :string
  end
end
