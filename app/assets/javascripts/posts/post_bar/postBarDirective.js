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
            if (body && $scope.contributor){
                $scope.newComment = '';
                posts.comment($scope.post, { contributor: angular.fromJson($scope.contributor), body: body })
                    .then(function(post){ $scope.post = post; });
            }
        };

        $scope.makeAnswer = function(body){
            if (body && $scope.contributor){
                $scope.newAnswer = '';
                posts.answer($scope.post, { contributor: angular.fromJson($scope.contributor), body: body })
                    .then(function(post){ $scope.post = post; });
            }
        };

        $scope.availableContributors = getAvailableContributors();
        $scope.contributor = ($scope.availableContributors.length != 1) ? null : $scope.availableContributors[0];

        function getAvailableContributors(){
            var contributors = [
                {
                    id: sessionService.getCurrentUser().id,
                    name: sessionService.getCurrentUser().name,
                    type: 'User'
                }
            ];
            var figures = profiles.approvedFiguresForUser(sessionService.getCurrentUser());
            for (var i=0; i<figures.length; i++) {
                contributors.push({
                    id: figures[i].id,
                    name: figures[i].name,
                    type: 'PublicFigure'
                });
            }
            return contributors;
        }
    }
  
  return {
    restrict: 'E',
    scope: {
        post: '='
    },
    link: linker,
    templateUrl: 'posts/post_bar/_postBar.html'
  };
}]);