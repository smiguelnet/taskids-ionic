(function() {
'use strict'
    angular
        .module('TaskidsApp')
        .controller('ChildrenController', ChildrenController);
    
    ChildrenController.$inject = ['$rootScope', '$scope', '$ionicModal', '$timeout', '$ionicNavBarDelegate', 'ChildrenService'];

    function ChildrenController($rootScope, $scope, $ionicModal, $timeout, $ionicNavBarDelegate, ChildrenService) {
        var vm = this;
        vm.childrenId = null;
        vm.childrenList = [];
        vm.childAgeRange = [];

        $ionicNavBarDelegate.showBackButton = true;

        vm.admDelete = false;
    
        vm.enableDeleteAction = function() {
            vm.admDelete = !vm.admDelete;
        };

        vm.setChild = function(child) {
            if (child !== undefined)
                vm.childrenId = child.id;
            else
                vm.childrenId = null;
        };

        var setChildrenList = function () {
            vm.childrenList = ChildrenService.loadChildren();
        };

        var setupChildAgeRange = function() {
            var index = 0;
            for (index = 0; index <= 18; index++)
                vm.childAgeRange.push(index);
        };

        //Update
        //TODO: implement ...
        vm.updateData = function() {
            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        activate();
        function activate() {
            setChildrenList();
            setupChildAgeRange();
        }
    }
})();