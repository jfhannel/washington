'use strict';

angular.module('washingtonApp')
.factory('sessionService', [
	'$q', 
	'$http',
	function($q, $http)
	{

		var me = {};
		me.sessionInfo = { user: null };

		me.loadSessionInfo = function()
		{
			return $http.get('/users/current.json').success(function(data){
	      		me.sessionInfo.user = data.user;
	    	});
		};

		return me;

	}]);