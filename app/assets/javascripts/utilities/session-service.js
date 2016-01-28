'use strict';

angular.module('pw.app')
.factory('sessionService', ['$http',
function($http) {

	var sessionInfo = null;

	function loadSessionInfo() {
		return $http.get('/users/current.json').then(function(response) {
      		sessionInfo = response.data;
    	});
	}

	function getCurrentUser() {
		return sessionInfo ? sessionInfo.user : '';
	}

	return {
		getCurrentUser: getCurrentUser,
		loadSessionInfo: loadSessionInfo
	};

}]);