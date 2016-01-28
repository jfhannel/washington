'use strict';

angular.module('pw.app')
.directive('pwPublicFigurePage', ['$route',
    'profiles',
function($route,
         profiles) {

    function linker ($scope, $el) {

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
        templateUrl: 'profiles/public_figures/_public-figure-profile.html'
    };

}]);