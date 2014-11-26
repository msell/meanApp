'use strict';

angular.module('meanApp')
    .controller('LogoutCtrl', function (authToken, $state) {
        authToken.removeToken();
        $state.go('main');
    });