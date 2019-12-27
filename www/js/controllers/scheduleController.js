(function() {
'use strict';

    angular
        .module('TaskidsApp')
        .controller('ScheduleController', ScheduleController);

    ScheduleController.$inject =  ['$rootScope', '$scope', '$ionicModal', '$timeout', '$ionicNavBarDelegate', 'ActivityService', 'ChildrenService'];

    function ScheduleController($rootScope, $scope, $ionicModal, $timeout, $ionicNavBarDelegate, ActivityService, ChildrenService) {
        var vm = this;
        
        vm.actitityList = [];
        vm.childrenList = [];
        vm.type = "0";
        vm.subType = "0";

        $ionicNavBarDelegate.showBackButton = true;

        vm.admDelete = false;
    
        vm.enableDeleteAction = function() {
            vm.admDelete = !vm.admDelete;
        };

        var setActitityList = function () {
            vm.actitityList = ActivityService.loadActitity();
        };        

        var setChildrenList = function () {
            vm.childrenList = ChildrenService.loadChildren();
        };

        activate();
        function activate() { 
            setActitityList();
            setChildrenList();
        }
    }
})();