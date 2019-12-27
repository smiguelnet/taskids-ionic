angular.module('starter.controllers', [])

.controller('AppCtrl', function ($rootScope, $scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  $rootScope.showMenu = true;

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('ActivitiesCtrl', function($scope, $stateParams) {
  $scope.todos = [
    { title: 'Licao de casa', id: 1 },
    { title: 'Escovar os dentes', id: 2 },
    { title: 'Tomar banho', id: 3 }
  ]

  $scope.activities = [
    { title: 'Licao de casa', id: 1, done: 10, gone: -16, forgotten: 0 },
    { title: 'Escovar os dentes', id: 2, done: 15, gone: -8, forgotten: 0 },
    { title: 'Tomar banho', id: 3, done: 12, gone: -12, forgotten: 5 },
    { title: 'Estudar ingles', id: 4, done: 18, gone: -14, forgotten: 5 },
    { title: 'Estudar matematica', id: 5, done: 26, gone: -20, forgotten: 7 }
  ]

  var activityId = Number($stateParams.activityId);
  if (!isNaN(activityId)) {
    $scope.activity = {
      title: 'Licao de casa', id: 1, done: 10, gone: -16, forgotten: 0
    }
  }

})

.controller('AccountCtrl', function($rootScope, $scope, $ionicModal, $timeout) {
  $rootScope.showMenu = false;
})

.controller('ChildrenCtrl', function($rootScope, $scope, $ionicModal, $timeout) {
  $rootScope.showMenu = true;
})
.controller('HomeCtrl', function($rootScope, $scope, $ionicModal, $timeout) {
  $rootScope.showMenu = false;
});

