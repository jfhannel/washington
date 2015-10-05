angular.module('washingtonApp')
.directive('pwPost', function() {
  return {
    restrict: 'E',
    templateUrl: 'posts/_post.html'
  };
});