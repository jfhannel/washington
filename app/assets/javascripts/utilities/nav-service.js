'use strict';

angular.module('washingtonApp')
.factory('navService', [
	'$rootScope',
	'$state',
	'posts',
	function($rootScope, $state, posts)
	{
		var me = {};

		me.goToPost = function(id){
			$state.go('root.post', { id: id });
		};

		me.goHome = function(){
			$state.go('root.home');
		};

		me.goToCurrentUserProfile = function(){
			$state.go('root.profile', { id: $rootScope.sessionInfo.user.id })
		};

		me.goToPublicFigure = function(id){
			$state.go('root.figure', { id: id });
		};

		return me;
	}]
);