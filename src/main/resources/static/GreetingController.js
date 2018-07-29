(function() {
    angular.module('myApp').controller('GreetingController', controllerFn);
    controllerFn.$inject = ['userFactory'];

    function controllerFn(userFactory) {

        var vm = this;
        vm.world = 'Anton'

        userFactory.getUsers()
        .then(function(data, status, header, config) {
            vm.users = data;
        })
        .catch(function(error, status, header, config) {
        console.log("error");
        });
    }
})();