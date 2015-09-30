'use strict';

angular.module('washingtonApp')
.controller('PostCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){

	$scope.post = null;
	
	posts.getPost($stateParams.id).success(function(data){
		$scope.post = data.post;
	});

	$scope.upvotePost = function(){
		if ($scope.post){
			posts.upvote($scope.post);
		}
	};

}]);