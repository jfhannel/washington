'use strict';

angular.module('washingtonApp')
.controller('ProfileCtrl', [
'$scope',
'users',
function($scope, users){	
	$scope.user = users.user;

    $scope.approvePublicFigure = function(){
        users.approvePublicFigure();
    };

    $scope.revokePublicFigure = function(){
        users.revokePublicFigure();
    };

}]);