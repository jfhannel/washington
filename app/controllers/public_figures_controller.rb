class PublicFiguresController < ApplicationController

  def approve
    @public_figure = PublicFigure.find(params[:id])
    @public_figure.verified = true
    @public_figure.save
    render 'show'
  end

  def revoke
    @public_figure = PublicFigure.find(params[:id])
    @public_figure.verified = false
    @public_figure.save
    render 'show'
  end

  def show
    @public_figure = PublicFigure.find(params[:id])
  end

  def searchFigures
      oauth_access_token = current_user[:fb_access_token]
      
      query = params[:query]
      doFBSearch = params[:fbSearch]
      @results = PublicFigure.where("name ILIKE ?", '%'+query+'%').all.to_a

      if query.length > 4 and doFBSearch #params[:external]
        @graph = Koala::Facebook::API.new(oauth_access_token, ENV['FACEBOOK_SECRET'])
        pages = @graph.search(query, {
            type: :page,
            fields: ['id', 'name', 'category', 'about', 'picture', 'bio', 'affiliation', 'emails', 'is_verified', 'link', 'likes', 'best_page']
          })
        p pages
        
        pages.each do |p|
          if @results.length > 10
            return
          else
            if p['category'] == 'Politician' or p['category'] == 'Public Figure'
              @results.append({ 
                id: nil,
                fb_id: p['id'],
                name: p['name'],
                fb_profile_url: p['link'],
                fb_profpic_url: (p['picture'] and p['picture']['data'] and p['picture']['data']['url']) ? p['picture']['data']['url'] : nil,
                fb_bio: p['bio'],
                fb_about: p['about'],
                fb_emails: (p['emails'] and p['emails'].length) ? p['emails'].join(',') : nil,
                fb_verified: p['is_verified'],
                verified: nil,
                fb_likes: p['likes'],
                fb_best_page: p['best_page']
              })
            end
          end
        end
      end
    end
  end