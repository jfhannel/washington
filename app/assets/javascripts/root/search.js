'use strict';

angular.module('washingtonApp')
.factory('search', [
	'$http', 
	function($http)
	{
		var me = {};
	 	
	  	me.search = function(query) {
		  	return $http.post('/users/search.json', query);
		};

	  	return me;
	}]
);