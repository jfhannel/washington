'use strict';

angular.module('pw.app')
.directive('pwProfilePage', ['$route',
    'profiles',
    'sessionService',
function($route,
         profiles,
         sessionService) {

    function linker ($scope, $el) {

        $scope.user = sessionService.getCurrentUser();
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

        profiles.getPublicFigure($route.current.params.id)
        .then(function(figure) {
            $scope.figure = figure;
        });

        $scope.approvePublicFigure = function() {
            profiles.approvePublicFigure($scope.figure)
            .then(function(figure) {
                $scope.figure = figure;
            });
        };

        $scope.revokePublicFigure = function() {
            profiles.revokePublicFigure($scope.figure)
            .then(function(figure) {
                $scope.figure = figure;
            });
        };
    }

    return {
        restrict: 'E',
        replace: true,
        link: linker,
        templateUrl: 'profiles/users/_profile.html'
    };

}]);