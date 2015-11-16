angular.module('washingtonApp')
.directive('pwPostBar', ['posts', function(posts) {
  return {
    restrict: 'E',
    scope: {
        post: '='
    },
    link: function($scope,$element,$attr) {
        $scope.upvotePost = function(){
            posts.upvote($scope.post).then(function(post){ $scope.post = post; });
        };

        $scope.commentsShown = false;

        $scope.makeComment = function(body){
            if (body){
                $scope.newComment = '';
                posts.comment($scope.post, { body: body }).then(function(post){ $scope.post = post; });
            }
        };
    },
    templateUrl: 'posts/post_bar/_postBar.html'
  };
}]);