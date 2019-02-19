Rails.application.routes.draw do
  devise_for :users
  root 'groups#index'
  resource :users, only: [:index,:edit, :update] do
    get 'search'
  end
  resources :groups, only: [:new, :create, :edit, :update] do
    resources :messages, only: [:index, :create]
  end
end
