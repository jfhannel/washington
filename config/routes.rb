Rails.application.routes.draw do

  devise_for :users, :controllers => { omniauth_callbacks: 'omniauth_callbacks' }
  
  root to: 'application#angular'

  get '/login', to: 'users#index'

  post '/posts/search', to: 'posts#search'

  post '/searchFigures', to: 'public_figures#searchFigures'

  get '/users/current', to: 'users#current'
  post '/users/current/setActiveContributor', to: 'users#setActiveContributor'
  post '/users/approveForFigures', to: 'users#approveForFigures'
  post '/users/revokeForFigures', to: 'users#revokeForFigures'

  post '/public_figures/approve', to: 'public_figures#approve'
  post '/public_figures/revoke', to: 'public_figures#revoke'

  get '/proxies/requested', to: 'proxies#requested'

  resources :posts, only: [:create, :index, :show] do
    resources :comments, only: [:show, :create] do
      member do
        put '/upvote' => 'comments#upvote'
      end
    end

    resources :answers, only: [:show, :create] do
      member do
        put '/upvote' => 'answers#upvote'
      end
    end

    member do
      put '/upvote' => 'posts#upvote'
    end
  end

  resources :users, only: [:show] do
    get 'notifications' => 'users#notifications'
  end
  resources :public_figures, only: [:show] do
    get 'notifications' => 'public_figures#notifications'
  end
  resources :proxies

  match "*path", to: "application#angular", via: :all

  # match '/users/:id/finish_signup' => 'users#finish_signup', via: [:get, :patch], :as => :finish_signup
  
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
