'use strict';

/**
 * @ngdoc overview
 * @name weVoteApp
 * @description
 * # weVoteApp
 *
 * Main module of the application.
 */
  var app = angular
    .module('weVoteApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'ui.router',
      'firebase'
    ])
    .config(function ($stateProvider, $urlRouterProvider ) {
    $urlRouterProvider.otherwise('/main');
    $stateProvider
      .state('main', {
        url: '/main',
        controller: 'MainCtrl',
        views: {
          '': {
            templateUrl: 'views/main.html'
          }
        }
      })
    ;
  })
      .constant('FIREBASE_URL', 'https://WeVote.firebaseio.com/');
     /* $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .when('/about', {
          templateUrl: 'views/about.html',
          controller: 'AboutCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });*/
