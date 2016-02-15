'use strict';

angular.module('pw.app')
.directive('pwPostPage', ['$route',
    'posts',
function($route,
         posts) {

    function linker($scope, $el) {
        posts.getPost($route.current.params.id)
        .then(function(post) {
            $scope.post = post;
        });
    }

    return {
        restrict: 'E',
        link: linker,
        replace: true,
        templateUrl: 'posts/_post.html'
    };

}]);