class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :omniauthable, :omniauth_providers => [:spotify]

  has_many :artist_users
  has_many :artists, through: :artist_users

  def self.from_omniauth(auth)
  # raise auth.credentials.inspect
  where(provider: auth.provider, uid: auth.uid).first_or_create do |user|
    user.name = auth.info.name
    user.email = auth.info.email
    user.password = Devise.friendly_token[0,20]
    # user.access_token = auth.credentials.token
    # user.refresh_token = auth.credentials.refresh_token
    end
  end

end
