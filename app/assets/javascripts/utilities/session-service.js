'use strict';

angular.module('washingtonApp')
.factory('sessionService', [
	'$q', 
	'$rootScope',
	'$http',
	function($q, $rootScope, $http)
	{

		var me = {};
		me.sessionInfo = null;

		me.loadSessionInfo = function()
		{
			return $http.get('/users/current.json').success(function(data){
	      		me.sessionInfo = data;
	      		$rootScope.sessionInfo = data;
	    	});
		};

		me.getUserName = function()
		{
			return me.sessionInfo ? me.sessionInfo.name : '';
		};

		$rootScope.sessionService = me;

		return me;

	}]);