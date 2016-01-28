'use strict';

angular.module('pw.app')
.controller('PostViewCtrl', ['$scope',
    'postPromise',
function($scope,
         postPromise){	

	$scope.post = postPromise;

}]);