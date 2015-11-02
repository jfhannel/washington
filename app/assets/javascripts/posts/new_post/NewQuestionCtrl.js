'use strict';

angular.module('washingtonApp')
.controller('NewQuestionCtrl', [
'$rootScope',
'$scope',
'$mdDialog',
'posts',
function($rootScope, $scope, $mdDialog, posts){

	var initQuestion = {
        title: "",
        body: ""
    };
    $scope.newQuestion = initQuestion;
    
    $scope.hide = function() {
        $mdDialog.hide($scope.newQuestion);

	  	if($scope.newQuestion.title != ''){
	  		posts.create({
                title: $scope.newQuestion.title,
			    body: $scope.newQuestion.body
		  	});
		  	$scope.newQuestion = initQuestion;
	  	}
    };
    
    $scope.cancel = function() {
        $mdDialog.cancel();
    };

}]);