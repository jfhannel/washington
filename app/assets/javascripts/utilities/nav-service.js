'use strict';

angular.module('washingtonApp')
.factory('navService', [
	'posts',
	'$state',
	function(posts, $state)
	{
		var me = {};

		me.goToPost = function(id){
			$state.go('root.post', { id: id });
		};

		me.goHome = function(){
			$state.go('root.home');
		};

		return me;
	}]
);