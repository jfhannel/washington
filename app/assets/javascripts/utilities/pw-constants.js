'use strict';

angular.module('pw.app')
.factory('pwConstants', [
function() {

	return {
		contributorTypes: {
	        USER: 'User',
	        PUBLIC_FIGURE: 'PublicFigure'
	    },
        routes: {
            Home: '/',
            Post: '/posts',
            Profile: '/profiles',
            PublicFigure: '/publicfigures',
            Notifications: '/notifications'
        }
	};
	
}]);