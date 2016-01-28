'use strict';

angular.module('pw.app')
.controller('AppCanvasController', ['$route',
    '$scope',
function ($route,
          $scope) {

    var canvasUrl = {
        'home':            'app-canvas/pages/home.html',
        'post':            'app-canvas/pages/post.html',
        'profile':         'app-canvas/pages/profile.html',
        'public-figure':    'app-canvas/pages/public-figure.html'
    };

    $scope.canvasUrl = canvasUrl;

    function updateCanvas() {
        var canvasState = $route.current.canvasState;

        var canvasModuleUrl = canvasUrl[canvasState];
        if (!canvasModuleUrl) {
            console.warn('Unhandled canvas state: ', canvasState);
            return;
        }

        $scope.canvasState = canvasState;
    }

    function configureScopeHandlers() {
        // listen for route changes
        $scope.$on('$routeChangeSuccess', function ($evt, newRoute, oldRoute) {
            console.log('weout');
            // only deal with valid canvas state
            if (!newRoute.canvasState) { return; }

            updateCanvas();
        });
    }

    configureScopeHandlers();

}]);

