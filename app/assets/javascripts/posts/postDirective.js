angular.module('washingtonApp')
.directive('pwPost', ['posts', function(posts) {
  return {
    restrict: 'E',
    scope: {
        post: '='
    },
    link: function($scope,$element,$attr) {
        $scope.makeAnswer = function(body){
            if (body){
                $scope.newAnswer = '';
                posts.answer($scope.posts.post, { body: body });
            }
        };
    },
    templateUrl: 'posts/_post.html'
  };
}]);