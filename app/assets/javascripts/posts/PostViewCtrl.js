'use strict';

angular.module('washingtonApp')
.controller('PostViewCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){	

	$scope.posts = posts;

    $scope.makeAnswer = function(body){
        if (body){
            $scope.newAnswer = '';
            posts.answer($scope.posts.post, { body: body });
        }
    };

}]);