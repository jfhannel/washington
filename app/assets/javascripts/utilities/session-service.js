'use strict';

angular.module('pw.app')
.factory('sessionService', ['$http',
    'pwConstants',
function($http,
         pwConstants) {

	var session = {};

	function loadSessionInfo() {
        if (!!session.info) {
            return;
        } else {
            return $http.get('/users/current.json').then(function(response) {
                session.info = response.data;
                return;
            });
        }
	}

	function getCurrentUser() {
        if (!!session.info) {
            return session.info.user;
        }

		console.error('bad session info');
	}

    function isPublicFigureActive() {
        return session.info.user.type === pwConstants.contributorTypes.PUBLIC_FIGURE;
    }

    function setActiveUser(user) {
        console.log('setting active user', user);
        if (!session.info) {
            return;
        }

        if (!session.info.rootUser) {
            session.info.rootUser = session.info.user;
        }

        session.info.user = user;
    }

	return {
		getCurrentUser: getCurrentUser,
        loadSessionInfo: loadSessionInfo,
        session: session,
        setActiveUser: setActiveUser,
        isPublicFigureActive: isPublicFigureActive
	};

}]);