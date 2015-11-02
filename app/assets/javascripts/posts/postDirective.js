angular.module('washingtonApp')
.directive('pwPost', function() {
  return {
    restrict: 'E',
    scope: {
        post: '='
    },
    controller: 'PostCtrl',
    templateUrl: 'posts/_post.html'
  };
});