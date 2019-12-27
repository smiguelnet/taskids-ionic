(function () {
    'use strict';
    angular
        .module('TaskidsApp')
        .controller('FaqController', FaqController);

    FaqController.$inject = ['$rootScope', '$scope', '$ionicModal', '$timeout'];

    function FaqController($rootScope, $scope, $ionicModal, $timeout) {
        var vm = this;

        //TODO: implement ...
        vm.updateData = function() {
            $timeout(function() {
                $scope.$broadcast('scroll.refreshComplete');
            }, 1000);
        };

        $scope.groups = [];
        for (var i = 0; i < 4; i++) {
            $scope.groups[i] = {
                name: (i+1),
                items: []
            };
            for (var j = 1; j < 4; j++) {
                $scope.groups[i].items.push(j);
            }
        }

        $scope.toggleGroup = function (group) {
            if ($scope.isGroupShown(group)) {
                $scope.shownGroup = null;
            } else {
                $scope.shownGroup = group;
            }
        };
        $scope.isGroupShown = function (group) {
            return $scope.shownGroup === group;
        };

        activate();

        function activate() { }
    }
})();