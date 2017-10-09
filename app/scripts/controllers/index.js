'use strict';

/**
 * @ngdoc function
 * @name tonymartinApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the tonymartinApp
 */
angular.module('tonymartinApp')
  .controller('IndexCtrl', function ($scope) {

    //Listen to the active location sent from the opened html in ng-view
    $scope.$on('activelocation', function (event, data) {
      $scope.active = data;
    } );

    //Send active location downwards to MenuCtrl
    $scope.$broadcast('activeLocationDown', $scope.active);

  });
