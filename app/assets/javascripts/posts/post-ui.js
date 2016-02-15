'use strict';

angular.module('pw.app')
.directive('pwPost', [
function() {
    
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'posts/_post.html'
    };

}]);