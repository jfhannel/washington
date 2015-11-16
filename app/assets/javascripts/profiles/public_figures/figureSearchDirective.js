angular.module('washingtonApp')
.directive('pwFigureSearch', ['$q', 'search', function($q, search) {
  return {
    restrict: 'E',
    scope: {
        taggedFigures: '=',
        searchFb: '='
    },
    link: function($scope,$element,$attr) {
        
        $scope.suggestedFigures = [];
        $scope.searchText = '';
        console.log($scope.searchFb);
        $scope.removeFigure = function(figure){
            var index = $scope.taggedFigures.indexOf(figure);
            if (index > -1){
                $scope.taggedFigures.splice(index,1);
            }
        };

        $scope.searchTextChange = function(){
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

        $scope.querySearch = function(fbSearch){
            if ($scope.searchText != null && $scope.searchText.length){
                var deferred = $q.defer();
                search.publicFigures({ query: $scope.searchText, fbSearch: fbSearch }).success(function(data){
                    var titleSuggestions = $scope.filterFigures(data.public_figures);
                    deferred.resolve(titleSuggestions);
                });
                $scope.suggestedFigures = deferred.promise;
            }
            else {
                $scope.suggestedFigures = [];
            }
        };

        $scope.figureSelected = function(item){
            $scope.searchText = '';
            if (item){
                $scope.taggedFigures.push(item);
            }
        };

        $scope.filterFigures = function(figures){
            if (!(figures && figures.length)){
                return [];
            }
            var fb_ids = [];
            var i;
            for (i=0; i<$scope.taggedFigures.length; i++){
                fb_ids.push($scope.taggedFigures[i].fb_id);
            }
            var sug_ids = [];
            var dupeIds = [];
            for (i=0; i<figures.length; i++){
                if (sug_ids.indexOf(figures[i].fb_id) > -1) {
                    dupeIds.push(figures[i].fb_id);
                } else {
                    sug_ids.push(figures[i].fb_id);
                }
            }
            var newfigs = [];
            for (i=0; i<figures.length; i++){
                if (fb_ids.indexOf(figures[i].fb_id) == -1){
                    if (dupeIds.indexOf(figures[i].fb_id) == -1 || figures[i].id)
                    {
                        newfigs.push(figures[i]);
                    }
                }
            }
            return newfigs;     
        };
    },
    templateUrl: 'profiles/public_figures/_search.html'
  };
}]);