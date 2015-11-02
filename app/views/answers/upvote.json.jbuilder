json.answer do
	json.partial! 'answer', answer: @answer
	json.author do
		json.partial! 'users/user', user: @answer.user
	end
end