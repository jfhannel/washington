'use strict';

angular.module('washingtonApp')
.factory('posts', [
	'$http', 
	function($http)
	{
		var o = 
		{
	    	posts: []
	  	};
	 	
	 	o.getAll = function() {
	    	return $http.get('/posts.json');
	  	};

	  	o.getPost = function(id) {
	  		return $http.get('/posts/'+id+'.json');
	  	};

	  	o.create = function(post) {
		  	return $http.post('/posts.json', post).success(function(data){
		    	o.posts.push(data.post);
		  	});
		};

		o.upvote = function(post) {
		  return $http.put('/posts/' + post.id + '/upvote.json')
		    .success(function(data){
		      post.upvotes += 1;
		    });
		};

	  	return o;
	}]
);