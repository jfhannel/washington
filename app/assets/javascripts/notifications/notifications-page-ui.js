angular.module('pw.app')
.directive('pwNotificationsPage', ['posts',
    'profiles',
    'sessionService',
function(posts,
         profiles,
         sessionService) {

    function linker ($scope, $el) {
        if (sessionService.isPublicFigureActive()) {
            posts.getPostsForFigure(sessionService.getActiveContributor())
                .then(function(posts) {
                    $scope.taggedPosts = posts;
                });
        } else {
            posts.getRecentPostsForUser(sessionService.getRootUser())
                .then(function(posts) {
                    $scope.activePosts = posts;
                });
        }

        if (sessionService.getRootUser().is_admin) {
            posts.getProxyRequests()
                .then(function(requests) {
                    $scope.requests = requests;
                });
        }

        $scope.approveProxy = function(user, figure) {
            profiles.approveForFigures(user, [figure])
                .then(function(user) {
                });
        };
    }

    return {
        restrict: 'E',
        link: linker,
        templateUrl: 'notifications/_notifications.html'
    };
}]);