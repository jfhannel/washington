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
    });
    $urlRouterProvider.otherwise('/');
    
}])
.run([
    '$rootScope',
    'sessionService',
    function($rootScope, sessionService)
    {
      sessionService.loadSessionInfo();
    }
  ]);