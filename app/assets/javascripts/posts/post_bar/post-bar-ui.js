angular.module('pw.app')
.directive('pwPostBar', ['profiles',
    'posts',
    'sessionService',
function(profiles,
         posts,
         sessionService) {

    function linker($scope, $element, $attr) {

        $scope.upvotePost = function(){
            posts.upvote($scope.post).then(function(post){ $scope.post = post; });
        };

        $scope.commentsShown = false;

        $scope.makeComment = function(body){
            if (body){
                $scope.newComment = '';
                posts.comment($scope.post, { contributor: angular.fromJson(sessionService.getActiveContributor()), body: body })
                    .then(function(post){ $scope.post = post; });
            }
        };

        $scope.makeAnswer = function(body){
            if (body){
                $scope.newAnswer = '';
                posts.answer($scope.post, { contributor: angular.fromJson(sessionService.getActiveContributor()), body: body })
                    .then(function(post){ $scope.post = post; });
            }
        };
    }
  
  return {
    restrict: 'E',
    scope: {
        post: '='
    },
    link: linker,
    templateUrl: 'posts/post_bar/_post-bar.html'
  };
}]);