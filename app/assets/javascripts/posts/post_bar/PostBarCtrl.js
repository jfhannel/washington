'use strict';

angular.module('washingtonApp')
.controller('PostBarCtrl', [
'$scope',
'posts',
function($scope, posts){

	$scope.posts = posts;	

	$scope.upvotePost = function(post){
		posts.upvote(post);
	};

	$scope.commentsShown = false;

	$scope.makeComment = function(post, body){
		if (body){
			$scope.newComment = '';
			posts.comment(post, { body: body });
		}
	};

}]);