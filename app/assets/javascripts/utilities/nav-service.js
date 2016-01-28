'use strict';

angular.module('pw.app')
.factory('navService', ['$location',
	'posts',
	'sessionService',
function($location,
		 posts,
		 sessionService) {

	var ROUTES = {
		Home: '/',
        Post: '/posts',
        Profile: '/profiles',
        PublicFigure: '/publicfigures'		
	};

	var me = {};

	function goToFunction(routeKey) {
		return function(id) {
			var path = ROUTES[routeKey];

			console.log(routeKey, path);

			if (!path) {
				return;
			}

			if (!!id) {
				path += '/' + id.toString();
			}

			console.log(path);

			$location.path(path);
		};
	}

	for (var routeKey in ROUTES) {
		me['goTo' + routeKey] = goToFunction(routeKey);
	}

	me.goToCurrentUserProfile = function() {
		console.log('aaa');
		me.goToProfile(sessionService.getCurrentUser().id);
	};

	return me;
}]);