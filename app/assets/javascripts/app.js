'use strict';

angular.module('washingtonApp', ['ui.router', 'ngMaterial', 'templates', 'ngMdIcons'])
.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('root', {
      abstract: true,
      url: '',
      templateUrl: 'layout.html'
    })  
    .state('root.home', {
      url: '',
      resolve: {
        postPromise: ['posts', function(posts){
          return posts.getAll();
        }]
      },
      views: {
        'header': {
          templateUrl: 'root/_root.html',
          controller: 'AppCtrl'
        },
        'main': {
          templateUrl: 'home/_home.html',
          controller: 'HomeCtrl'
        }
      }
    })
    .state('root.home1', {
      url: '/',
      resolve: {
        postPromise: ['posts', function(posts){
          return posts.getAll();
        }]
      },
      views: {
        'header': {
          templateUrl: 'root/_root.html',
          controller: 'AppCtrl'
        },
        'main': {
          templateUrl: 'home/_home.html',
          controller: 'HomeCtrl'
        }
      }
    })
    .state('root.post', {
      url: '/posts/:id',
      resolve: {
        postPromise: ['$stateParams', 'posts', function($stateParams, posts){
          return posts.getPost($stateParams.id);
        }]
      },
      views: {
        'header': {
          templateUrl: 'root/_root.html',
          controller: 'AppCtrl'
        },
        'main': {
          templateUrl: 'posts/_postView.html',
          controller: 'PostViewCtrl'
        }
      }
    })
    .state('root.profile', {
      url: '/profiles/:id',
      resolve: {
        userPromise: ['$stateParams', 'profiles', function($stateParams, profiles){
          return profiles.getUser($stateParams.id);
        }]
      },
      views: {
        'header': {
          templateUrl: 'root/_root.html',
          controller: 'AppCtrl'
        },
        'main': {
          templateUrl: 'profiles/users/_profile.html',
          controller: 'ProfileCtrl'
        }
      }
    })
    .state('root.figure', {
      url: '/publicfigures/:id',
      resolve: {
        figurePromise: ['$stateParams', 'profiles', function($stateParams, profiles){
          return profiles.getPublicFigure($stateParams.id);
        }]
      },
      views: {
        'header': {
          templateUrl: 'root/_root.html',
          controller: 'AppCtrl'
        },
        'main': {
          templateUrl: 'profiles/public_figures/_public_figure_profile.html',
          controller: 'PublicFigureProfileCtrl'
        }
      }
    });
    $urlRouterProvider.otherwise('/');
    
}])
.run([
    '$rootScope',
    'navService',
    'sessionService',
    function($rootScope, navService, sessionService)
    {
      $rootScope.navigator = navService;
      $rootScope.sessionInfo = sessionService.sessionInfo;
      sessionService.loadSessionInfo();
    }
  ]);