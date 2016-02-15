'use strict';

angular.module('pw.app')
.controller('HomeBarController', ['$route',
    '$scope',
function ($route,
          $scope) {

    function updateCanvas() {
        var canvasState = $route.current.canvasState;

        $scope.canvasState = canvasState;
    }

    function configureScopeHandlers() {
        // listen for route changes
        $scope.$on('$routeChangeSuccess', function ($evt, newRoute, oldRoute) {
            // only deal with valid canvas state
            if (!newRoute.canvasState) { return; }

            updateCanvas();
        });
    }

    configureScopeHandlers();

}]);

