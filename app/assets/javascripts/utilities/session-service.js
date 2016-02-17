'use strict';

angular.module('pw.app')
.factory('sessionService', ['$http',
    '$window',
    'pwConstants',
function($http,
         $window,
         pwConstants) {

	var session = {};

	function loadSessionInfo() {
        if (!!session.info) {
            return;
        } else {
            return $http.get('/users/current.json').then(function(response) {
                session.info = {};
                session.info.rootUser = response.data.user.rootUser;
                session.info.activeContributor = response.data.user.activeContributor;
                return;
            });
        }
	}

	function getRootUser() {
        if (!!session.info) {
            return session.info.rootUser;
        }
	}

    function getActiveContributor() {
        return session.info.activeContributor
    }

    function isPublicFigureActive() {
        console.log('active',session.info.activeContributor.type === pwConstants.contributorTypes.PUBLIC_FIGURE);
        return session.info.activeContributor.type === pwConstants.contributorTypes.PUBLIC_FIGURE;
    }

    function setActiveContributor(contributor) {
        $http.post(
            '/users/current/setActiveContributor',
            {
                id: contributor.id,
                type: contributor.type
            }
        ).then(function() {
            $window.location.reload();
        });
    }

	return {
		getRootUser: getRootUser,
        loadSessionInfo: loadSessionInfo,
        setActiveContributor: setActiveContributor,
        isPublicFigureActive: isPublicFigureActive,
        getActiveContributor: getActiveContributor
	};

}]);