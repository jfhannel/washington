class Proxy < ActiveRecord::Base
	belongs_to :user
	belongs_to :public_figure
	has_many :answers, as: :answerer
end
