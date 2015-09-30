'use strict';

angular.module('washingtonApp')
.controller('NewQuestionCtrl', [
'$rootScope',
'$scope',
'$mdDialog',
'posts',
function($rootScope, $scope, $mdDialog, posts){

	var initQuestion = {
        body: ""
    };
    //$scope.newQuestion = initQuestion;
    
    $scope.hide = function() {
        $mdDialog.hide($scope.newQuestion);

	  	if($scope.newQuestion.body != ''){
	  		posts.create({
			    body: $scope.newQuestion.body
		  	});
		  	$scope.newQuestion = initQuestion;
	  	}
    };
    
    $scope.cancel = function() {
        $mdDialog.cancel();
    };

}]);