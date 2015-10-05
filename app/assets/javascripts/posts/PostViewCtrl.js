'use strict';

angular.module('washingtonApp')
.controller('PostViewCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts){	

	$scope.posts = posts.posts;

}]);