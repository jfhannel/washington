angular.module('pw.app')
.directive('pwUserSelector', ['navService',
    'profiles',
    'pwConstants',
    'sessionService',
function(navService,
         profiles,
         pwConstants,
         sessionService) {

    function linker($scope, $element, $attr) {

        var selfContributor = angular.extend(
            sessionService.session.info.user,
            {
                type: pwConstants.contributorTypes.USER
            }
        );

        $scope.availableContributors = getAvailableContributors();
        $scope.activeContributor = selfContributor;

        $scope.setActiveUser = function() {
            sessionService.setActiveUser(angular.fromJson($scope.activeContributor));
        };

        function getAvailableContributors() {
            var contributors = [selfContributor];
            
            var figures = profiles.approvedFiguresForUser(sessionService.session.info.user);

            figures.forEach(function(figure) {
                contributors.push(angular.extend(
                    figure,
                    {
                        type: pwConstants.contributorTypes.PUBLIC_FIGURE
                    })
                );
            });

            return contributors;
        }

        $scope.goToContributor = function(contributor) {
            if (contributor.type === pwConstants.contributorTypes.USER) {
                navService.goToProfile(contributor.id);
            } else if (contributor.type === pwConstants.contributorTypes.PUBLIC_FIGURE) {
                navService.goToPublicFigure(contributor.id);
            }
        };
    }

    return {
        restrict: 'E',
        link: linker,
        templateUrl: 'widgets/user-selector/_user-selector.html'
    };
}]);