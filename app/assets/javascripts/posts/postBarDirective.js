angular.module('washingtonApp')
.directive('pwPostBar', function() {
  return {
    restrict: 'E',
    templateUrl: 'posts/_postBar.html'
  };
});