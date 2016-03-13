class Notification < ActiveRecord::Base
  belongs_to :contributor, :polymorphic => true
  belongs_to :notable_event
end
