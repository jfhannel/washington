'use strict';

angular.module('pw.app')
.directive('pwAppCanvas', [
function () {

    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'app-canvas/app-canvas.html',
        controller: 'AppCanvasController'
    };

}]);