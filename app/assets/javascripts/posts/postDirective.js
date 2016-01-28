angular.module('pw.app')
.directive('pwPost', ['posts', function(posts) {
  return {
    restrict: 'E',
    link: function($scope,$element,$attr) {
        console.log('linking postdir');  
    },
    templateUrl: 'posts/_post.html'
  };
}]);