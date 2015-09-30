class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  respond_to :json

  def angular
  	if current_user or true
    	render 'layouts/application'
    else
    	redirect_to '/user'
    end
  end
  
end
