'use strict';

angular.module('washingtonApp')
.controller('ProfileCtrl', [
'$scope',
'profiles',
'userPromise',
function($scope, profiles, userPromise){	
	$scope.user = userPromise;
    $scope.taggedFigures = [];

    $scope.approveProxy = function(figures){
        console.log(figures);
        profiles.approveForFigures($scope.user, figures).then(function(user){
            $scope.user = user;
            console.log(user);
            $scope.taggedFigures = [];
        });
    };

    $scope.revokeProxy = function(figures){
        profiles.revokeForFigures($scope.user, figures).then(function(user){
            $scope.user = user;
            $scope.taggedFigures = [];
        });
    };

    $scope.approvedFigures = function(){
        var figs = [];
        for (var i=0; i<$scope.user.proxies.length; i++){
            if ($scope.user.proxies[i].approved){
                figs.push($scope.user.proxies[i]);
            }
        }
        return figs;
    };

    $scope.requestedFigures = function(){
        var figs = [];
        for (var i=0; i<$scope.user.proxies.length; i++){
            if (!($scope.user.proxies[i].approved)){
                figs.push($scope.user.proxies[i]);
            }
        }
        return figs;
    };

}]);