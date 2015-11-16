'use strict';

angular.module('washingtonApp')
.controller('PostViewCtrl', [
'$scope',
'$stateParams',
'posts',
'postPromise',
function($scope, $stateParams, posts, postPromise){	

	$scope.post = postPromise;

    $scope.makeAnswer = function(body){
        if (body){
            $scope.newAnswer = '';
            posts.answer($scope.posts.post, { body: body });
        }
    };

}]);