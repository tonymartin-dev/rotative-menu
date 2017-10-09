'use strict';

/**
 * @ngdoc overview
 * @name tonymartinApp
 * @description
 * # tonymartinApp
 *
 * Main module of the application.
 */
angular
  .module('tonymartinApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/one', {
        templateUrl: 'views/one.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/four', {
        templateUrl: 'views/four.html',
        controller: 'ExperimentsCtrl',
        controllerAs: 'experiments'
      })
      .when('/two', {
        templateUrl: 'views/two.html',
        controller: 'PortfolioCtrl',
        controllerAs: 'portfolio'
      })
      .when('/three', {
        templateUrl: 'views/three.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
