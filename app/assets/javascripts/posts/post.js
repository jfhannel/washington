'use strict';

angular.module('pw.app')
.factory('posts', ['$http',
    'sessionService',
function($http,
         sessionService) {
	
	var o = {};
 	
 	o.getAll = function() {
    	return $http.get('/posts.json')
      	.then(function(response) {
      		return response.data.posts;
      	});
  	};

    o.getFeed = o.getAll;

    o.getProxyRequests = function() {
      return $http.get('/proxies/requested.json')
        .then(function(response) {
            return response.data.requests;
        });
    };

    o.getPostsForFigure = function(figure) {
        return $http.get('/public_figures/' + figure.id + '/notifications.json')
          .then(function(response) {
              return response.data.posts;
          });
    };

    o.getRecentPostsForUser = function(user) {
        return $http.get('/users/' + user.id + '/notifications.json')
          .then(function(response) {
              return response.data.posts;
          });
    };

  	o.getPost = function(id) {
  		return $http.get('/posts/' + id + '.json')
    		.then(function(response) {
    			return response.data.post;
    		});
  	};

  	o.create = function(post) {
  		return $http.post('/posts.json', post)
    		.then(function(response) {
        	return response.data.post;
      	});
	};

	o.upvote = function(post) {
		return $http.put('/posts/' + post.id + '/upvote.json')
  		.then(function(response) {
  	      	return response.data.post;
  		});
	};

	o.comment = function(post, comment) {
		return $http.post('/posts/' + post.id + '/comments.json', comment)
  		.then(function(response) {
  			return response.data.post;
  		});
	};

	o.answer = function(post, answer) {
		return $http.post('/posts/' + post.id + '/answers.json', answer)
  		.then(function(response) {
  			return response.data.post;
  		});
	};

  	return o;
}]);