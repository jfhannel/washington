'use strict';

angular.module('pw.app', ['ngMaterial',
    'ngMdIcons',
    'ngRoute',
    'templates'
])
.config(['$routeProvider',
function($routeProvider) {

    var canvasStates = {
        HOME: 'home',
        POST: 'post',
        PROFILE: 'profile',
        PUBLIC_FIGURE: 'public-figure',
        NOTIFICATIONS: 'notifications'
    };

    var universalResolves = {
        user: function(sessionService) {
            return sessionService.loadSessionInfo();
        }
    };
           
    var customRouteProvider = angular.extend(
        {},
        $routeProvider,
        {
            when: function(path, route) {
                route.resolve = (route.resolve) ? route.resolve : {};
                angular.extend(route.resolve, universalResolves);
                $routeProvider.when(path, route);
                return this;
            }
        }
    );

    customRouteProvider
        .when('/', { canvasState: canvasStates.HOME })
        .when('/posts/:id', { canvasState: canvasStates.POST })
        .when('/profiles/:id', { canvasState: canvasStates.PROFILE })
        .when('/publicfigures/:id', { canvasState: canvasStates.PUBLIC_FIGURE })
        .when('/notifications', { canvasState: canvasStates.NOTIFICATIONS })
        .otherwise({ redirectTo: '/' });
    
}])
.run(['$rootScope',
    'navService',
    'sessionService',
function($rootScope,
         navService,
         sessionService) {

    $rootScope.navService = navService;
    $rootScope.sessionService = sessionService;
    
}]);
