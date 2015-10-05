'use strict';

angular.module('washingtonApp')
.controller('PostBarCtrl', [
'$scope',
'posts',
function($scope, posts){	

	$scope.upvotePost = function(){
		posts.upvote($scope.post);
	};

	$scope.commentsShown = false;

	$scope.toggleComments = function() {
		console.log("toggle");
		$scope.commentsShown = ! $scope.commentsShown;
	};

	$scope.makeComment = function(body){
		if (body){
			$scope.newComment = '';
			posts.comment($scope.post, { body: body });
		}
	};

}]);