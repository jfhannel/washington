'use strict';

angular.module('pw.app')
.controller('NewQuestionCtrl', ['$scope',
    '$mdDialog',
    '$window',
    'posts',
function($scope,
         $mdDialog,
         $window,
         posts) {

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
            $window.location.reload();
	  	}
    };
    
    $scope.cancel = function() {
        $mdDialog.cancel();
    };

}]);