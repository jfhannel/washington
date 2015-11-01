'use strict';

angular.module('washingtonApp')
.controller('PostViewCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){	

	$scope.posts = posts.posts;

    $scope.upvotePost = function(){
        posts.upvote($scope.post);
    };

    $scope.makeComment = function(body){
        if (body){
            $scope.newComment = '';
            posts.comment($scope.post, { body: body });
        }
    };

}]);