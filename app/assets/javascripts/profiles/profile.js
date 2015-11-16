'use strict';

angular.module('washingtonApp')
.factory('profiles', [
	'$http', '$q', 
	function($http, $q)
	{
		var o = {};

		o.getUser = function(id) {
			var d = $q.defer();
	  		$http.get('/users/' + id + '.json').success(function(data){
	  			d.resolve(data.user);
	  		});
	  		return d.promise;
	  	};

	  	o.getPublicFigure = function(id) {
	  		var d = $q.defer();
	  		$http.get('/public_figures/' + id + '.json').success(function(data){
	  			d.resolve(data.public_figure);
	  		});
	  		return d.promise;
	  	};

	  	o.approvePublicFigure = function(figure) {
	  		if (figure){
	  			var d = $q.defer();
	  			$http.post('/public_figures/approve.json', { id: figure.id }).success(function(data){
	  				d.resolve(data.public_figure);
	  			});
	  			return d.promise;
	  		}
	  	};

	  	o.revokePublicFigure = function(figure) {
	  		if (figure){
	  			var d = $q.defer();
	  			$http.post('/public_figures/revoke.json', { id: figure.id }).success(function(data){
	  				d.resolve(data.public_figure);
	  			});
	  			return d.promise;
	  		}
	  	};

	  	o.approveForFigures = function(user,figures) {
	  		var ids = [];
	  		for (var i=0; i<figures.length; i++) {
	  			ids.push(figures[i].id);
	  		}
	  		var d = $q.defer();
	  		$http.post('/users/approveForFigures.json', { user_id: user.id, ids: ids }).success(function(data){
	  			d.resolve(data.user);
	  		});
	  		return d.promise;
	  	};

	  	o.revokeForFigures = function(user,figures) {
	  		var ids = [];
	  		for (var i=0; i<figures.length; i++) {
	  			ids.push(figures[i].id);
	  		}
	  		var d = $q.defer();
	  		$http.post('/users/revokeForFigures.json', { user_id: user.id, ids: ids }).success(function(data){
	  			d.resolve(data.user);
	  		});
	  		return d.promise;
	  	};

	  	return o;
	}]
);