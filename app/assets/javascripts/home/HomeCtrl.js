'use strict';

angular.module('washingtonApp')
.controller('HomeCtrl', [
'$rootScope',
'$scope',
'posts',
'postPromise',
function($rootScope, $scope, posts, postPromise){
    
    $scope.posts = postPromise;

}]);