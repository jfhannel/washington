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
    .state('root.post', {
      url: '/posts/:id',
      views: {
        'header': {
          templateUrl: 'root/_root.html',
          controller: 'AppCtrl'
        },
        'main': {
          templateUrl: 'posts/_post.html',
          controller: 'PostCtrl'
        }
      }
    });
    /*
    .state('root.posts', {
	  url: '/posts',
	  views: {
        'container@': {
          templateUrl: 'posts/_posts.html'
        }
      },
	  controller: 'PostsCtrl',
    resolve: {
      postPromise: ['posts', function(posts){
        return posts.getAll();
      }]
    }
	});
*/

  //$urlRouterProvider.otherwise('home');
}])
.run([
    '$rootScope',
    'sessionService',
    function($rootScope, sessionService)
    {
      sessionService.loadSessionInfo();
    }
  ]);