'use strict';

angular.module('washingtonApp')
.controller('PostViewCtrl', [
'$scope',
'$stateParams',
'posts',
'postPromise',
function($scope, $stateParams, posts, postPromise){	

	$scope.post = postPromise;

}]);