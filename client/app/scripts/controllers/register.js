'use strict';

/**
 * @ngdoc function
 * @name meanAppApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the meanApp
 */
angular.module('meanApp')
  .controller('RegisterCtrl', function ($scope, $http, alert) {
    $scope.submit = function () {

      var url = 'http://localhost:3000/register';
      var user = {name: 'Matt'};

      $http.post(url, user)
        .success(function (res) {
          alert('success','OK', 'You are now registered');
        })
        .error(function (err) {
          alert('warning', 'Doh!', 'Could not register');
        });

    }
  });