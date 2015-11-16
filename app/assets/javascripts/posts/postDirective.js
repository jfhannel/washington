angular.module('washingtonApp')
.directive('pwPost', ['posts', function(posts) {
  return {
    restrict: 'E',
    scope: {
        post: '='
    },
    link: function($scope,$element,$attr) {
        
    },
    templateUrl: 'posts/_post.html'
  };
}]);