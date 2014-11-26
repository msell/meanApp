'use strict';

angular.module('meanApp')
  .controller('VehiclesCtrl', function ($scope) {
    $scope.vehicles = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
