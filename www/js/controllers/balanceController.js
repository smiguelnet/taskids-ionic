(function() {
'use strict';
    angular
        .module('TaskidsApp')
        .controller('BalanceController', BalanceController);

    BalanceController.$inject = ['$rootScope', '$scope', '$ionicModal', '$timeout', 'BalanceService'];

    function BalanceController($rootScope, $scope, $ionicModal, $timeout, BalanceService) {
        var vm = this;
        vm.childrenId = null;
        vm.balanceToday = [];
        vm.balancePast = [];
        vm.balanceTotal = {};

        var setBalanceToday = function(childrenId) {
            vm.balanceToday = BalanceService.loadBalance();
        };

        var setBalancePast = function(childrenId) {
            vm.balancePast = BalanceService.loadBalance();
        };

        var setBalanceTotal = function(childrenId) {
            vm.balanceTotal = BalanceService.getTotal();
        };

        //Update
        //TODO: implement ...
        vm.updateData = function() {
            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        //LoadMore
        vm.loadMore = function() {
            $timeout(function() {
                Array.prototype.push.apply(vm.balancePast, BalanceService.loadBalance());
                $scope.$broadcast('scroll.infiniteScrollComplete');
            }, 1000);
        };

        activate();
        function activate() { 
            setBalanceToday();
            setBalanceTotal();
            setBalancePast();
        };
    }
})();
