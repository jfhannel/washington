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

			if (!path) {
				return;
			}

			if (!!id) {
				path += '/' + id.toString();
			}

			$location.path(path);
		};
	}

	for (var routeKey in ROUTES) {
		me['goTo' + routeKey] = goToFunction(routeKey);
	}

	me.goToCurrentUserProfile = function() {
		me.goToProfile(sessionService.session.info.user.id);
	};

	return me;
}]);