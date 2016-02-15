angular.module('pw.app')
.directive('pwNotifications', [
function() {

    return {
        restrict: 'E',
        templateUrl: 'widgets/notifications/_notifications.html'
    };
}]);