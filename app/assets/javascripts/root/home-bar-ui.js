angular.module('pw.app')
.directive('pwHomeBar', ['$mdDialog',
    '$rootScope',
    'searchService',
    'navService',
function($mdDialog,
         $rootScope,
         searchService,
         navService) {

    function linker($scope, $element, $attr) {
        $scope.promptNewQuestion = function() {
            $mdDialog.show({
                templateUrl: 'posts/new_post/_newPost.html',
                controller: 'NewQuestionCtrl',
                clickOutsideToClose: true
            });
        };

        var text = '';

        $scope.searchTextChange = function(query) {
            text = query;
        };

        $scope.selectedItemChange = function(item) {
            if (item){
                navService.goToPost(item.id);
            }
        };

        $scope.go = function(){
            searchService.posts({
                query: text
            }).then(function(response) {
                if (response.data.posts.length) {
                    navService.goToPost(data.posts[0].id)
                }
            });
        };

        $scope.querySearch = function(query) {
            return searchService.posts({
                query: query
            }).then(function(response) {
                return response.data.posts;
            });
        };
    }

    return {
        restrict: 'E',
        link: linker,
        replace: true,
        templateUrl: 'root/_home-bar.html',
        controller: 'HomeBarController'
    };
}]);