'use strict';

angular.module('washingtonApp')
.factory('posts', [
	'$http', '$q',
	function($http, $q)
	{
		var o = {};
	 	
	 	o.getAll = function() {
	 		var d = $q.defer();
	    	$http.get('/posts.json').success(function(data){
	    		d.resolve(data.posts);
	    	});
	    	return d.promise;
	  	};

	  	o.getPost = function(id) {
	  		var d = $q.defer();
	  		$http.get('/posts/' + id + '.json').success(function(data){
	  			d.resolve(data.post);
	  		});
	  		return d.promise;
	  	};

	  	o.create = function(post) {
	  		var d = $q.defer();
		  	$http.post('/posts.json', post).success(function(data){
		    	d.resolve(data.post);
		  	});
		  	return d.promise;
		};

		o.upvote = function(post) {
			var d = $q.defer();
			$http.put('/posts/' + post.id + '/upvote.json').success(function(data){
		      	d.resolve(data.post);
			});
			return d.promise;
		};

		o.comment = function(post, comment) {
			var d = $q.defer();
			$http.post('/posts/' + post.id + '/comments.json', comment).success(function(data){
				d.resolve(data.post);
			});
			return d.promise;
		};

		o.answer = function(post, answer) {
			var d = $q.defer();
			$http.post('/posts/' + post.id + '/answers.json', answer).success(function(data){
				o.posts[o.indexInPosts(data.post.id)] = data.post;
			});
			return d.promise;
		};

	  	return o;
	}]
);