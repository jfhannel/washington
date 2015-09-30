'use strict';

angular.module('washingtonApp')
.controller('HomeCtrl', [
'$rootScope',
'$scope',
'posts',
'postPromise',
function($rootScope, $scope, posts, postPromise){

	posts.posts = postPromise.data.posts;
	$scope.posts = posts.posts;

	$scope.upvotePost = function(post){
		posts.upvote(post);
	};

}]);