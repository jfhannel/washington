'use strict';

angular.module('washingtonApp')
.factory('profiles', [
	'$http', '$q', 
	function($http, $q)
	{
		var o = {};

		o.getProxyRequests = function() {
			var d = $q.defer();
			$http.get('/proxies.json').success(function(data){
				d.resolve(data.proxies);
			});
			return d.promise;
		};

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
	  		var fb_ids = [];
	  		for (var i=0; i<figures.length; i++) {
	  			fb_ids.push(figures[i].fb_id);
	  		}
	  		var d = $q.defer();
	  		$http.post('/users/approveForFigures.json', { user_id: user.id, fb_ids: fb_ids }).success(function(data){
	  			d.resolve(data.user);
	  		});
	  		return d.promise;
	  	};

	  	o.revokeForFigures = function(user,figures) {
	  		var fb_ids = [];
	  		for (var i=0; i<figures.length; i++) {
	  			fb_ids.push(figures[i].fb_id);
	  		}
	  		var d = $q.defer();
	  		$http.post('/users/revokeForFigures.json', { user_id: user.id, fb_ids: fb_ids }).success(function(data){
	  			d.resolve(data.user);
	  		});
	  		return d.promise;
	  	};

	  	o.approvedFiguresForUser = function(user) {
	  		var figs = [];
	        for (var i=0; i<user.proxies.length; i++){
	            if (user.proxies[i].approved){
	                figs.push(user.proxies[i]);
	            }
	        }
	        return figs;
	  	}

	  	o.requestedFiguresForUser = function(user) {
	  		var figs = [];
	        for (var i=0; i<user.proxies.length; i++){
	            if (!(user.proxies[i].approved)){
	                figs.push(user.proxies[i]);
	            }
	        }
	        return figs;
	  	}

	  	return o;
	}]
);