'use strict';

angular.module('pw.app')
.factory('navService', ['$location',
	'posts',
	'pwConstants',
	'sessionService',
function($location,
		 posts,
		 pwConstants,
		 sessionService) {

	var me = {};

	function goToFunction(routeKey) {
		return function(id) {
			var path = pwConstants.routes[routeKey];

			if (!path) {
				return;
			}

			if (!!id) {
				path += '/' + id.toString();
			}

			$location.path(path);
		};
	}

	for (var routeKey in pwConstants.routes) {
		me['goTo' + routeKey] = goToFunction(routeKey);
	}

	me.goToContributorProfile = function(contributor) {
		if (contributor.type === pwConstants.contributorTypes.USER) {
			me.goToProfile(contributor.id);
		} else if (contributor.type === pwConstants.contributorTypes.PUBLIC_FIGURE) {
			me.goToPublicFigure(contributor.id);
		}
	};

	me.goToActiveContributorProfile = function() {
		me.goToContributorProfile(sessionService.getActiveContributor());
	};

	return me;
}]);