class UsersController < ApplicationController
  before_action :set_user, only: [:show, :edit, :update, :destroy]

  def current
    @user = current_user
  end

  def searchFigures
    oauth_access_token = current_user[:fb_access_token]
    
    query = params[:query]
    @results = User.where("name ILIKE ?", '%'+query+'%').all.to_a

    if query.length > 4 #params[:external]
      @graph = Koala::Facebook::API.new(oauth_access_token,'a2b3a389999ed50c5993edccfb72e9ec')
      pages = @graph.search(query, {
          type: :page,
          fields: ['name', 'category', 'affiliation', 'emails', 'is_verified', 'link', 'likes']
        })
      p pages
      
      pages.each do |p|
        if @results.length > 10
          return
        else
          if p['category'] == 'Politician' or p['category'] == 'Public Figure'
            @results.append({ 
              id: p['id'], 
              name: p['name'],
              email: nil,
              is_admin: nil,
              is_public_figure: nil,
              fb_profile_url: p['link'],
              fb_profpic_url: nil,
              external: true })
          end
        end
      end
    end
  end

  def approve
    @user = User.find(params[:id])
    @user.is_public_figure = true
    @user.save
  end

  def revoke
    @user = User.find(params[:id])
    @user.is_public_figure = false
    @user.save
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