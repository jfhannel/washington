class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  def current
    @user = current_user
    render 'show'
  end

  def approveForFigures
    figures = PublicFigure.find(params[:ids])
    user = User.find(params[:user_id])
    figures.each do |f|
      proxy = Proxy.find_by user_id: user[:id], public_figure_id: f[:id]
      if proxy.nil?
        proxy = Proxy.new
        proxy.user_id = user[:id]
        proxy.public_figure_id = f[:id]
      end
      proxy.approved = current_user.is_admin
      proxy.save
    end
    @user = user
    render 'show'
  end

  def revokeForFigures
    figures = PublicFigure.find(params[:ids])
    user = User.find(params[:user_id])
    figures.each do |f|
      proxy = Proxy.find_by user_id: user[:id], public_figure_id: f[:id]
      if not proxy.nil?
        proxy.approved = false
        proxy.save
      end
    end
    @user = user
    render 'show'
  end

  def index
  end

  # GET /users/:id.:format
  def show
    @user = User.find(params[:id])
  end

  # GET /users/:id/edit
  def edit
    # authorize! :update, @user
  end

  # PATCH/PUT /users/:id.:format
  def update
    # authorize! :update, @user
    respond_to do |format|
      if @user.update(user_params)
        sign_in(@user == current_user ? @user : current_user, :bypass => true)
        format.html { redirect_to @user, notice: 'Your profile was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @user.errors, status: :unprocessable_entity }
      end
    end
  end

  # GET/PATCH /users/:id/finish_signup
  def finish_signup
    # authorize! :update, @user 
    if request.patch? && params[:user] #&& params[:user][:email]
      if @user.update(user_params)
        @user.skip_reconfirmation!
        sign_in(@user, :bypass => true)
        redirect_to @user, notice: 'Your profile was successfully updated.'
      else
        @show_errors = true
      end
    end
  end

  # DELETE /users/:id.:format
  def destroy
    # authorize! :delete, @user
    @user.destroy
    respond_to do |format|
      format.html { redirect_to root_url }
      format.json { head :no_content }
    end
  end
  
  private
    def set_user
      @user = User.find(params[:id])
    end

    def user_params
      accessible = [ :name, :email ] # extend with your own params
      accessible << [ :password, :password_confirmation ] unless params[:user][:password].blank?
      params.require(:user).permit(accessible)
    end
end