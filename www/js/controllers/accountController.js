(function() {
'use strict'
    angular
        .module('TaskidsApp')
        .controller('AccountController', AccountController);
    
    AccountController.$inject = ['$rootScope', '$scope', '$ionicModal','$ionicPopup', '$timeout'];

    function AccountController($rootScope, $scope, $ionicModal, $ionicPopup, $timeout) {
        var vm = this;

        $ionicModal.fromTemplateUrl('js/templates/_forget_password_modal.html' ,{
            scope: $scope,
            animation: 'slide-in-up'
        }).then(function(modal) {
            vm.modal = modal;
        });

        vm.forgetPassword = function() {
            vm.modal.show();
        };

        vm.closeModal = function() {
            vm.modal.hide();
        };

        vm.sendPassword = function() {
            vm.modal.hide();
            $ionicPopup.show({
                template: '<div class="padding text-center pb10 pt10"><h4>Um nova senha foi enviada para seu e-mail</h4></div>',
                title: 'Opera&#231;&#227;o Realizada com Sucesso',
                buttons: [ 
                    { 
                        text: 'OK',
                        type: 'button-positive'
                    }
                ]
            });
        };

        activate();
        function activate() { }    
    }
})();