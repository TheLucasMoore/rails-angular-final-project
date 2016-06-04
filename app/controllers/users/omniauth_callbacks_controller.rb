class Users::OmniauthCallbacksController < Devise::OmniauthCallbacksController

  def spotify
    #render json: request.env['omniauth.auth'].to_json

    @user = User.from_omniauth(request.env["omniauth.auth"])
    spotify_user = RSpotify::User.new(request.env['omniauth.auth'])

    if @user.persisted?
      # then do the rest of the stuff
      sign_in_and_redirect @user, :event => :authentication #this will throw if @user is not activated
      set_flash_message(:notice, :success, :kind => "Spotify") if is_navigational_format?
    else
      session["devise.spotify_data"] = request.env["omniauth.auth"]
      redirect_to new_user_registration_url
    end
   end

  def failure
    redirect_to root_path
  end
end