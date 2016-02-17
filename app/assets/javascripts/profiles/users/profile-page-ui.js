'use strict';

angular.module('pw.app')
.directive('pwProfilePage', ['$route',
    'profiles',
    'sessionService',
function($route,
         profiles,
         sessionService) {

    function linker ($scope, $el) {

        $scope.taggedFigures = [];

        profiles.getUser($route.current.params.id)
            .then(function(user) {
                $scope.user = user;
            });

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
            if (!$scope.user) {
                return [];
            }
            return profiles.approvedFiguresForUser($scope.user);
        };

        $scope.requestedFigures = function() {
            if (!$scope.user) {
                return [];
            }
            return profiles.requestedFiguresForUser($scope.user);
        };
    }

    return {
        restrict: 'E',
        replace: true,
        link: linker,
        templateUrl: 'profiles/users/_profile.html'
    };

}]);