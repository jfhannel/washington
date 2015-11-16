'use strict';

angular.module('washingtonApp')
.factory('search', [
	'$http', 
	function($http)
	{
		var me = {};
	 	
	  	me.posts = function(query) {
		  	return $http.post('/posts/search.json', query);
		};

		me.publicFigures = function(query) {
		  	return $http.post('/searchFigures.json', query);
		};

	  	return me;
	}]
);