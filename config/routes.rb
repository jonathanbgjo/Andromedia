Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :videos, onky: [:show, :create, :index, :destroy] do 
      resources :comments, except: [:new, :edit]
    end
  end
  root "static_pages#root"

end
