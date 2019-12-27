(function() {
'use strict'
    angular
        .module('TaskidsApp')
        .controller('RewardController', RewardController);

    RewardController.$inject = ['$rootScope', '$scope', '$ionicModal', '$timeout', '$ionicPopup', '$ionicNavBarDelegate', 'RewardService', 'BalanceService'];

    function RewardController($rootScope, $scope, $ionicModal, $timeout, $ionicPopup, $ionicNavBarDelegate, RewardService, BalanceService) {
        var vm = this;
        
        vm.childrenId = null;
        vm.rewardList = [];
        vm.rewardChildrenList = [];
        vm.balanceTotal = BalanceService.getTotal(null);
        
        $ionicNavBarDelegate.showBackButton = true;

        vm.admDelete = false;
    
        vm.enableDeleteAction = function() {
            vm.admDelete = !vm.admDelete;
        };

        var setRewardList = function() {
            vm.rewardList = RewardService.loadReward();
        };

        var setRewardChildrenList = function(childrenId) {
            vm.rewardChildrenList = RewardService.loadRewardByChildren(childrenId);
        };
        
        vm.setBalance = function(price, itemSelected) {
            if (itemSelected)
                vm.balanceTotal -= price;
            else
                vm.balanceTotal += price;
        };

        vm.checkButtonChildren = function() {
            var index;
            for (index = 0; index < vm.rewardChildrenList.length; index++) {
                if (vm.rewardChildrenList[index].selected === true)
                    return false;
            }
            return true;
        };

        //Request
        vm.requestReward = function() {
            $ionicPopup.show({
                template: '<div class="padding text-center pb10 pt10"><h4>A mam&#227;e vai avaliar se pode</h4></div>',
                title: 'Legal!',
                buttons: [ {
                    text: 'OK',
                    type: 'button-positive'
                }]
            });
        };

        //TODO: implement ...
        vm.updateData = function() {
            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        activate();

        function activate() {
            setRewardChildrenList(vm.childrenId);
            setRewardList();
        };    
    }
})();