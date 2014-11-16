/**
 * Created by matt on 11/15/14.
 */
angular.module('meanApp').config(function ($urlRouterProvider, $stateProvider) {

  // if none of these states fit, just go home
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      templateUrl: '/views/main.html'
    })

    .state('register', {
      url: '/register',
      templateUrl: '/views/register.html',
      controller: 'RegisterCtrl'
    })
})