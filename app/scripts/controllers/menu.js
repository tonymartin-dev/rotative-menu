'use strict';

/**
 * @ngdoc function
 * @name tonymartinApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the tonymartinApp
 */
angular.module('tonymartinApp')
  .controller('MenuCtrl', function ($scope, $location, $timeout) {

    //Set default variables
    $scope.rotate0   = 45;
    $scope.rotate1   = '';
    $scope.moveleft  = '385';
    $scope.menuClass = 'menuInit';

    //Listen the active location sent from IndexCtrl
    $scope.$on('activeLocationDown', function (event, info){
      $scope.activeFromUpwards = info;
    });

    //Set menuClass depending on the active location
    /*if ($scope.activeFromUpwards === '') {
      $scope.menuClass = 'menuInit';
    }else{
      $scope.menuClass = 'menuInit';
      $timeout(function(){
        $scope.menuClass = 'menu-container';
      }, 600);
    }*/

    //When click ona a button, change menu rotation angle and change initial angle within 600ms
    $scope.clickfunc  = function(section, angle1){
      $scope.rotate1  = angle1;

      $timeout(function(){
        $scope.menuClass = 'menu-container';
        $scope.moveleft = 0;
        $scope.rotate0  = $scope.rotate1;
      }, 600);
    };


  });
