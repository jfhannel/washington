'use strict';

angular.module('washingtonApp')
.controller('NewQuestionCtrl', [
'$rootScope',
'$scope',
'$mdDialog',
'$q',
'posts',
'search',
function($rootScope, $scope, $mdDialog, $q, posts, search){

	var initQuestion = {
        title: "",
        body: ""
    };
    $scope.newQuestion = initQuestion;
    
    $scope.saveAndHide = function() {
        $mdDialog.hide($scope.newQuestion);

	  	if($scope.newQuestion.title != ''){
	  		posts.create({
                title: $scope.newQuestion.title,
			    body: $scope.newQuestion.body,
                figures: $scope.taggedFigures
		  	});
		  	$scope.newQuestion = initQuestion;
	  	}
    };
    
    $scope.cancel = function() {
        $mdDialog.cancel();
    };

    $scope.titleText = '';
    $scope.taggedFigures = [];

    $scope.selectedItemChange = function(item){
        $scope.titleText = '';
        if (item){
            $scope.taggedFigures.push(item);
        }
    };

    function removeExisting(figures){
        if (!(figures && figures.length)){
            return [];
        }
        var ids = [];
        var i;
        for (i=0; i<$scope.taggedFigures.length; i++){
            ids.push($scope.taggedFigures[i].id);
        }
        var newfigs = [];
        for (i=0; i<figures.length; i++){
            if (ids.indexOf(figures[i].id) == -1){
                newfigs.push(figures[i]);
            }
        }
        return newfigs;     
    }

    var titleSuggestions = null;

    $scope.querySearch = function(){
        if ($scope.titleText != null){
            var deferred = $q.defer();
            search.publicFigures({ query: $scope.titleText }).success(function(data){
                titleSuggestions = removeExisting(data.users);
                deferred.resolve(titleSuggestions);
            });
            return deferred.promise;
        }
        else {
            return null;
        }
    };

}]);