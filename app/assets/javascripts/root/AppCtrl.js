'use strict';

angular.module('washingtonApp')
.controller('AppCtrl', [
'$rootScope',
'$scope',
'$mdDialog',
'$q',
'$state',
'search',
'navService',
function($scope, $rootScope, $mdDialog, $q, $state, search, navService){

	$scope.promptNewQuestion = function(){
		$mdDialog.show({
			templateUrl: 'posts/new_post/_newPost.html',
			controller: 'NewQuestionCtrl',
			clickOutsideToClose: true
		});
	};

	var text = '';

	$scope.searchTextChange = function(query){
		text = query;
	};

	$scope.selectedItemChange = function(item){
		if (item){
			goToItem(item);
		}
	};

	$scope.go = function(){
        search.posts({ query: text }).success(function(data){
        	if (data.posts.length){
        		goToItem(data.posts[0]);
        	}
        });
	};

	function goToItem(item){
		$rootScope.navigator.goToPost(item.id);
	}

	$scope.querySearch = function(query){
		var deferred = $q.defer();
        search.posts({ query: query }).success(function(data){
        	deferred.resolve(data.posts);
        });
        return deferred.promise;
	};

}]);