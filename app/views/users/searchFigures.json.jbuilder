json.users @results do |user|
	json.partial! 'users/user', user: user
end