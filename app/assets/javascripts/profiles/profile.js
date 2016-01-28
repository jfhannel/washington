'use strict';

angular.module('pw.app')
.factory('profiles', ['$http',
function($http) {
	
	var o = {};

	o.getProxyRequests = function() {
		return $http.get('/proxies.json')
		.then(function(response) {
			return response.data.proxies;
		});
	};

	o.getUser = function(id) {
  		return $http.get('/users/' + id + '.json')
  		.then(function(response) {
  			return response.data.user;
  		});
  	};

	o.getPublicFigure = function(id) {
		return $http.get('/public_figures/' + id + '.json')
		.then(function(response) {
			return response.data.public_figure;
		});
	};

	o.approvePublicFigure = function(figure) {
		if (figure) {
			return $http.post('/public_figures/approve.json', { id: figure.id })
			.then(function(response) {
				return response.data.public_figure;
			});
		}
	};

	o.revokePublicFigure = function(figure) {
		if (figure){
			return $http.post('/public_figures/revoke.json', { id: figure.id })
			.then(function(response) {
				return response.data.public_figure;
			});
		}
	};

	o.approveForFigures = function(user, figures) {
		var fb_ids = figures.map(function(figure) {
			return figure.fb_id;
		});
		
		return $http.post('/users/approveForFigures.json', { user_id: user.id, fb_ids: fb_ids })
		.then(function(response){
			return response.data.user;
		});
	};

	o.revokeForFigures = function(user, figures) {
		var fb_ids = figures.map(function(figure) {
			return figure.fb_id;
		});

		return $http.post('/users/revokeForFigures.json',
			{
				user_id: user.id,
				fb_ids: fb_ids
			}
		).then(function(response) {
			return response.data.user;
		});
	};

	o.approvedFiguresForUser = function(user) {
		return user.proxies.filter(function(proxy) {
			return proxy.approved;
		});
	}

	o.requestedFiguresForUser = function(user) {
		return user.proxies.filter(function(proxy) {
			return !(proxy.approved);
		});
	}

  return o;
}]);