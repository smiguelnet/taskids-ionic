(function() {
'use strict';
    angular
        .module('TaskidsApp')
        .controller('GlobalController', GlobalController);

    GlobalController.$inject = ['$rootScope'];
 
    function GlobalController($rootScope) {
        var vm = this;
        vm.showMenu = $rootScope.showMenu;
    }
})();
