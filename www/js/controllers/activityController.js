(function() {
'use strict'
    angular
        .module('TaskidsApp')
        .controller('ActivityController', ActivityController);

    ActivityController.$inject = ['$rootScope', '$state', '$scope', '$ionicModal', '$ionicPopup', '$timeout', '$ionicNavBarDelegate', 'ActivityService'];

    function ActivityController($rootScope, $state, $scope, $ionicModal, $ionicPopup, $timeout, $ionicNavBarDelegate, ActivityService) {
        var vm = this;
        vm.childrenId = null;
        vm.actitityList = [];
        vm.actitityDayChildrenList = [];
        vm.actitityWeekChildrenList = [];

        $ionicNavBarDelegate.showBackButton = true;

        vm.admDelete = false;
    
        vm.enableDeleteAction = function() {
            vm.admDelete = !vm.admDelete;
        };

        var setActitityDayListByChildren = function (childrenId) {
            vm.actitityDayChildrenList = ActivityService.loadActitityDayByChildren(childrenId);
        };

        var setActitityWeekListByChildren = function (childrenId) {
            vm.actitityWeekChildrenList = ActivityService.loadActitityWeekByChildren(childrenId);
        };

        var setActitityList = function () {
            vm.actitityList = ActivityService.loadActitity();
        };

        vm.checkButtonChildren = function() {
            if ((vm.actitityDayChildrenList !== null && vm.actitityDayChildrenList.length > 0)
                || (vm.actitityWeekChildrenList !== null && vm.actitityWeekChildrenList.length > 0)) {
                var index;
                for(index = 0; index < vm.actitityDayChildrenList.length; index++) {
                    if (vm.actitityDayChildrenList[index].selected === true)
                        return false;
                }

                for(index = 0; index < vm.actitityWeekChildrenList.length; index++) {
                    if (vm.actitityWeekChildrenList[index].selected === true)
                        return false;
                }
            }
            return true;
        };

        //Modal
        $ionicModal.fromTemplateUrl('js/templates/_activity_done_modal.html', {
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            vm.modal = modal;
        });

        vm.infoDone = function() {
            vm.modal.show();
        };

        vm.closeModal = function() {
            vm.modal.hide();
        };

        vm.done = function() {
            vm.modal.hide();
            $ionicPopup.show({
                template: '<div class="padding text-center pb10 pt10"><h4>A mam&#227;e vai ficar feliz!</h4></div>',
                title: 'Parab&#233;ns',
                buttons: [ 
                    { 
                        text: 'OK',
                        type: 'button-positive'
                    }
                ]
            });
            //Refresh
            vm.updateData();
        };

        //Update
        //TODO: implement ...
        vm.updateData = function() {
            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        //Range points
        vm.rangeList = [0, 5, 10, 20, 30, 40, 50];

        //init
        activate();

        function activate() {
            //if (vm.childrenId !== null) {
                setActitityDayListByChildren(vm.childrenId);
                setActitityWeekListByChildren(vm.childrenId);

            //} else {            
                setActitityList();
            //}
            
        }    
    }
})();