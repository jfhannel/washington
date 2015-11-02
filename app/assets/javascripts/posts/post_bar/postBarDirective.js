angular.module('washingtonApp')
.directive('pwPostBar', function() {
  return {
    restrict: 'E',
    scope: {
        post: '='
    },
    controller: 'PostBarCtrl',
    templateUrl: 'posts/post_bar/_postBar.html'
  };
});