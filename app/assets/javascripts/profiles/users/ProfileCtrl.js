'use strict';

angular.module('pw.app')
.controller('ProfileCtrl', ['$scope',
    'profiles',
function($scope,
         profiles) {
	
	$scope.user = userPromise;
    $scope.taggedFigures = [];

    $scope.approveProxy = function(figures) {
        profiles.approveForFigures($scope.user, figures).then(function(user) {
            $scope.user = user;
            $scope.taggedFigures = [];
        });
    };

    $scope.revokeProxy = function(figures) {
        profiles.revokeForFigures($scope.user, figures).then(function(user) {
            $scope.user = user;
            $scope.taggedFigures = [];
        });
    };

    $scope.approvedFigures = function() {
        return profiles.approvedFiguresForUser($scope.user);
    };

    $scope.requestedFigures = function() {
        return profiles.requestedFiguresForUser($scope.user);
    };

}]);