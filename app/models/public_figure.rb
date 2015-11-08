class PublicFigure < ActiveRecord::Base
	has_many :answers, as: :answerer
	has_and_belongs_to_many :users
end
