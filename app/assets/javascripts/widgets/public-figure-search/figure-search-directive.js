angular.module('pw.app')
.directive('pwFigureSearch', ['searchService',
function(searchService) {

    function linker($scope, $element, $attr) {
            
        $scope.suggestedFigures = [];
        $scope.searchText = '';
        
        $scope.removeFigure = function(figure) {
            var index = $scope.taggedFigures.indexOf(figure);
            if (index > -1) {
                $scope.taggedFigures.splice(index, 1);
            }
        };

        $scope.searchTextChange = function() {
            $scope.querySearch($scope.searchFb);
            /*
            if (fbSearch) {
                $scope.querySearch(true);
            }
            else {
                if (fbFigureSearch) {
                    clearTimeout(fbFigureSearch);
                }
                fbFigureSearch = setTimeout(function() { $scope.searchTextChange(true); }, 750);
                $scope.querySearch(false);
            }
            */
        };

        $scope.querySearch = function(fbSearch) {
            if ($scope.searchText != null && $scope.searchText.length) {

                $scope.suggestedFigures = searchService.publicFigures(
                    {
                        query: $scope.searchText,
                        fbSearch: fbSearch
                    }
                ).then(function(response) {
                    var titleSuggestions = filterFigures(response.data.public_figures);
                    return titleSuggestions;
                });
            }
            else {
                $scope.suggestedFigures = [];
            }
        };

        $scope.figureSelected = function(item) {
            $scope.searchText = '';
            if (item) {
                $scope.taggedFigures.push(item);
            }
        };

        function filterFigures(figures) {
            if (!(figures && figures.length)) {
                return [];
            }

            var alreadyTaggedIds = $scope.taggedFigures.map(function(figure) {
                return figure.fb_id;
            });

            return figures.filter(function(figure, index, self) {
                return alreadyTaggedIds.indexOf(figure.fb_id) === -1;
            });
        }
    }

    return {
        restrict: 'E',
        scope: {
            taggedFigures: '=',
            searchFb: '='
        },
        link: linker,
        templateUrl: 'widgets/public-figure-search/_search.html'
    };
}]);