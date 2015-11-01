'use strict';

angular.module('washingtonApp')
.factory('users', [
	'$http', 
	function($http)
	{
		var o = {
			user: null
		};

		o.getUser = function(id) {
	  		return $http.get('/users/' + id + '.json').success(function(data){
	  			o.user = data.user;
	  		});
	  	};

	  	o.approvePublicFigure = function() {
	  		if (o.user){
	  			return $http.post('/users/approve.json', { id: o.user.id }).success(function(data){
	  				o.user.is_public_figure = data.user.is_public_figure;
	  			});
	  		}
	  	};

	  	o.revokePublicFigure = function() {
	  		if (o.user){
	  			return $http.post('/users/revoke.json', { id: o.user.id }).success(function(data){
	  				o.user.is_public_figure = data.user.is_public_figure;
	  			});
	  		}
	  	};

	  	return o;
	}]
);