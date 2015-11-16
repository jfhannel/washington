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
    var fbFigureSearch = null;

    $scope.newQuestion = initQuestion;
    
    $scope.taggedFigures = [];
    
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

}]);