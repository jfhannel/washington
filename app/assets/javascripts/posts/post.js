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

	  	o.indexInPosts = function(post_id){
	  		return o.posts.findIndex(function(element, index, array){ return element.id == post_id; });
	  	};
	 	
	 	o.getAll = function() {
	    	return $http.get('/posts.json').success(function(data){
	    		o.posts = data.posts;
	    	});
	  	};

	  	o.getPost = function(id) {
	  		return $http.get('/posts/' + id + '.json').success(function(data){
	  			o.posts = [data.post];
	  		});
	  	};

	  	o.create = function(post) {
		  	return $http.post('/posts.json', post).success(function(data){
		    	o.posts.push(data.post);
		  	});
		};

		o.upvote = function(post) {
		  return $http.put('/posts/' + post.id + '/upvote.json')
		    .success(
		    	function(data){
			      	o.posts[o.indexInPosts(data.post.id)] = data.post;
			    });
		};

		o.comment = function(post, comment) {
			return $http.post('/posts/' + post.id + '/comments.json', comment).success(function(data){
				o.posts[o.indexInPosts(data.post.id)] = data.post;
			});
		};

	  	return o;
	}]
);