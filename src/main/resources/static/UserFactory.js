(function() {
    'use strict';

    angular.module('myApp').factory('userFactory', userFactory);
    userFactory.$inject = ['$http'];

    function userFactory($http) {
        var factory = {};


        factory.getUsers = function() {
            return $http({
                method: 'GET',
                url : '/demo/all'
            });
        }
        return factory;
    }
})();