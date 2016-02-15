angular.module('pw.app')
.directive('pwUserIcon', [
function() {

    function linker(scope, element, attr, ctrl, transclude) {
        var previousContent = null;

        var triggerRelink = function() {
            if (previousContent) {
                previousContent.remove();
                previousContent = null;
            }

            transclude(function(clone) {
                element.parent().append(clone);
                previousContent = clone;
            });

        };

        triggerRelink();

        scope.$watch('user', function(oldVal, newVal) {
            console.log('relinking');
            triggerRelink();
        });
    }

    return {
        transclude: 'element',
        restrict: 'E',
        scope: {
            user: '='
        },
        link: linker,
        templateUrl: 'widgets/user-icon/_user-icon.html'
    };
}]);