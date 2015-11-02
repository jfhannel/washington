# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

u = User.create!(
	email: "jordie@thoughtspot.com", 
	encrypted_password: "$yS8c8ktkmqAlOWhAmdHbgaZxZPNh4PLfKNVz/E/U5l4e", 
	password: "yaoyaoyao",
	password_confirmation: "yaoyaoyao",
	reset_password_token: nil, 
	reset_password_sent_at: nil, 
	remember_created_at: nil, 
	sign_in_count: 1, 
	current_sign_in_at: "2015-10-26 01:10:22", 
	last_sign_in_at: "2015-10-26 01:10:22", 
	current_sign_in_ip: "::1", 
	last_sign_in_ip: "::1", 
	created_at: "2015-10-26 01:10:22", 
	updated_at: "2015-10-26 02:58:27", 
	name: "Fake Fakington", 
	fb_about: nil, 
	fb_bio: nil, 
	fb_profile_url: "", 
	fb_gender: "male", 
	fb_verified: true, 
	fb_identity_verified: false, 
	fb_profpic_url: "", 
	fb_age_min: 21, 
	is_public_figure: false, 
	is_admin: true)

p = u.posts.create!(
	body: "This question is for people who have moved to America for an extended period of time, not foreigners who have come to visit. Answers can also be about something you find strange that you just can't get over. Answers should be specifically about coming to America, and should not apply to moving in general.", 
	created_at: "2015-10-26 01:11:28", 
	updated_at: "2015-10-26 01:11:28", 
	title: "What is the hardest thing to get used to after coming to America?")

p.upvotes.create!(
	upvotable_id: 1,
	upvotable_type: 'post',
	created_at: "2015-10-26 01:11:28", 
	updated_at: "2015-10-26 01:11:28")

p.user = u
p.save

u.posts.create!(
	body: "This is for a Masters. The Cambridge program is a 1 year MPhil degree. The MIT and Stanford M.S. degrees are 2 years. The reason I am partial to Cambridge is that I won a Gate's Scholarship to Cambridge, and the funding sources for MIT/Stanford are just via working at Laboratories. The schooling would be for industry.", 
	created_at: "2015-10-26 02:56:56", 
	updated_at: "2015-10-26 02:56:56", 
	title: "Which is more prestigious for graduate school in engineering: MIT, Stanford, or University of Cambridge?")

a = p.answers.create!(
	body:%q[Point of view by someone living in NYC for 3 years, coming from Europe (Living in Serbia, Austria and Bosnia). 

It is easy to adjust to good things so transition was unnoticeable and I am not listing them here, but some habits and a way of thinking can be so much part of who you are that it could take years to make sense or to adjust. 
 
Sweets and sweeteners
I have tasted some amazing cakes, sweets and cookies since coming to US. But my issue with all is that these taste too sweet. Everything has too much sugar for my taste (non-smoker). 
I never heard of High Fructose Corn Syrup because it is banned in Europe, but here you can find it even in some meat products. Artificial sweeteners are also in everything despite of health related research by credible institutions.
Workaround: NY has many shops with European goods and I shop some sweets there, but I still try everything else I can. I sometimes dilute juices with sparking water. I avoid HFCS and certain artificial sweeteners. I actually avoid "No Sugar" labeled products because it usually contains something else that I would rather avoid. There must be a reason I see more obese people than in any other country I have lived in or visited, despite the numbers showing NY is one of the least obese states.

Coffee
Americans coffee is technically coffee-bean tea. Hot water soaks the coffee grains and it drips, so it is technically a tea-like drink. Without 9 bar of pressure the real coffee flavor is not extracted. Being coffee lover I am always interested in trying different beans and brews but I have noticed that most of coffee prepared this way gives me coffee breath. Even American espresso (also mispronounced 'expresso' here) is sour even in yelp rated 5-star coffee shops. 
Workaround: I bought espresso machine and I buy Italian espresso coffee. When I am out, I look for Italian coffee shops. ],
	created_at: "2015-10-27 02:56:56", 
	updated_at: "2015-10-27 02:56:56")

a.user = u
a.save

c = p.comments.create!(
	body: "Thank you for eliciting such a lively response that is quite informative to an American.",
	created_at: "2015-10-26 05:56:56", 
	updated_at: "2015-10-26 05:56:56")

c.user = u
c.save