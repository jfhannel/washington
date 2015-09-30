# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.delete_all
Post.delete_all
Comment.delete_all

User.create!([
		{id: 1, name: 'Jordie', email: 'lol@gmail.com', password: 'asdfadfsdfsfsfd'}
	])

Post.create!([
		{id: 1, body: 'post1', user_id: 1}
	])

Comment.create!([
		{id: 1, body: 'comment1', user_id: 1, post_id: 1}
	])