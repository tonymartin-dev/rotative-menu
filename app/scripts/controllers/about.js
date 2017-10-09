'use strict';

/**
 * @ngdoc function
 * @name tonymartinApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tonymartinApp
 */
angular.module('tonymartinApp')
  .controller('AboutCtrl', function ($scope, $location) {

    //Watch for the current location path
    $scope.currentPath = $location.path();
    $scope.localactive = $scope.currentPath.replace('/','');  //Remove '/' from the location path

    //Send upwards current location
    $scope.$emit('activelocation', $scope.localactive );

    //When swipe, change location on ng-view
    $scope.slideFunction = function (view) {
      $location.path(view);
    };
    
  });
