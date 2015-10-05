'use strict';

angular.module('washingtonApp')
.factory('navService', [
	'$rootScope',
	'posts',
	'$state',
	function($rootScope, posts, $state)
	{
		var me = {};

		me.goToPost = function(id){
			$state.go('root.post', { id: id });
		};

		me.goHome = function(){
			$state.go('root.home');
		};

		$rootScope.navigator = me;

		return me;
	}]
);