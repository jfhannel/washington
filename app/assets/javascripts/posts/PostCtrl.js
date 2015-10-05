'use strict';

angular.module('washingtonApp')
.controller('PostCtrl', [
'$scope',
'posts',
function($scope, posts){	

	$scope.commentsShown = true;


	$scope.makeComment = function(body){
		$scope.newComment = '';
		posts.comment($scope.post, { body: body });
	};

	$scope.upvotePost = function(){
		posts.upvote($scope.post);
	};

}]);