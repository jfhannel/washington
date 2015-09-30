'use strict';

angular.module('washingtonApp')
.factory('navService', [
	'$rootScope',
	'$state',
	function($rootScope, $state)
	{
		var me = {};

		me.goToPost = function(id){
			$state.go('root.post', { id: id });
		};

		$rootScope.navigator = me;

		return me;
	}]
);