'use strict';

angular.module('washingtonApp')
.factory('sessionService', [
	'$q', 
	'$rootScope',
	'$http',
	function($q, $rootScope, $http)
	{

		var me = {};
		me.sessionInfo = { user: null };

		me.loadSessionInfo = function()
		{
			return $http.get('/users/current.json').success(function(data){
	      		me.sessionInfo.user = data.user;
	      		$rootScope.sessionInfo = me.sessionInfo.user;
	    	});
		};

		$rootScope.sessionService = me;

		return me;

	}]);