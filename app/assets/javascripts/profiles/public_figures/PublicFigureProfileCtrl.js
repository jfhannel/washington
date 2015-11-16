'use strict';

angular.module('washingtonApp')
.controller('PublicFigureProfileCtrl', [
'$scope',
'profiles',
'figurePromise',
function($scope, profiles, figurePromise){
	$scope.figure = figurePromise;

    $scope.approvePublicFigure = function(){
        profiles.approvePublicFigure($scope.figure).then(function(figure){ $scope.figure = figure; });
    };

    $scope.revokePublicFigure = function(){
        profiles.revokePublicFigure($scope.figure).then(function(figure){ $scope.figure = figure; });
    };

}]);