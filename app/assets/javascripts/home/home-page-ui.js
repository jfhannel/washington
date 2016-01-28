'use strict';

angular.module('pw.app')
.directive('pwHomePage', ['posts',
function(posts) {

    function linker ($scope, $el) {
        posts.getAll().then(function(posts) {
            $scope.posts = posts;
        });
    }

    return {
        restrict: 'E',
        replace: true,
        link: linker,
        templateUrl: 'home/_home.html'
    };

}]);