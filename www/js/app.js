angular
  .module('TaskidsApp', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('account', {
        url: '/account',
        templateUrl: 'js/templates/_account.html',
        onEnter: function ($rootScope) {
          $rootScope.optMenu = null;
          $rootScope.showMenu = false;
        }
      })
      .state('init', {
        url: '/init',
        templateUrl: 'js/templates/_init.html',
        onEnter: function ($rootScope) {
          $rootScope.optMenu = null;
          $rootScope.showMenu = false;
        }
      })
      .state('rewards', {
        url: '/rewards',
        templateUrl: 'js/templates/_rewards.html',
        onEnter: function ($rootScope) {
          $rootScope.optMenu = 'rewards';
          $rootScope.showMenu = true;
        },
      })
      .state('rewardsAdm', {
        url: '/rewards/adm',
        templateUrl: 'js/templates/_rewards_adm.html',
        onEnter: function ($rootScope) {
          $rootScope.optMenu = null;
          $rootScope.showMenu = true;
        },
      })
      .state('rewardAdm', {
        url: '/rewards/adm/:rewardId',
        templateUrl: 'js/templates/_reward_adm.html',
        onEnter: function ($rootScope) {
          $rootScope.optMenu = null;
          $rootScope.showMenu = true;
        }
      })
      .state('childrenAdm', {
        url: '/children/adm',
        templateUrl: 'js/templates/_children_adm.html',
        onEnter: function ($rootScope) {
          $rootScope.optMenu = null;
          $rootScope.showMenu = true;
        },
      })
      .state('childAdm', {
        url: '/children/adm/:childId',
        templateUrl: 'js/templates/_child_adm.html',
        onEnter: function ($rootScope) {
          $rootScope.optMenu = null;
          $rootScope.showMenu = true;
        }
      })
      .state('balance', {
        url: '/balance',
        templateUrl: 'js/templates/_balance.html',
        onEnter: function ($rootScope) {
          $rootScope.optMenu = 'balance';
          $rootScope.showMenu = true;
        }
      })
      .state('pointsAdm', {
        url: '/points/adm',
        templateUrl: 'js/templates/_points_adm.html',
        onEnter: function ($rootScope) {
          $rootScope.optMenu = null;
          $rootScope.showMenu = true;
        }
      })
      .state('activities', {
        url: '/activities',
        templateUrl: 'js/templates/_activities.html',
        onEnter: function ($rootScope) {
          $rootScope.optMenu = 'activities';
          $rootScope.showMenu = true;
        }
      })
      .state('activitiesAdm', {
        url: '/activities/adm',
        templateUrl: 'js/templates/_activities_adm.html',
        onEnter: function ($rootScope) {
          $rootScope.optMenu = null;
          $rootScope.showMenu = true;
        }
      })
      .state('activityAdm', {
        url: '/activities/adm/:activityId',
        templateUrl: 'js/templates/_activity_adm.html',
        onEnter: function ($rootScope) {
          $rootScope.optMenu = null;
          $rootScope.showMenu = true;
        }
      })
      .state('home', {
        url: '/home',
        templateUrl: 'js/templates/_home.html',
        onEnter: function ($rootScope) {
          $rootScope.optMenu = null;
          $rootScope.showMenu = true;
        }
      })
      .state('more', {
        url: '/more',
        templateUrl: 'js/templates/_more.html',
        onEnter: function ($rootScope) {
          $rootScope.optMenu = 'more';
          $rootScope.showMenu = true;
        },
      })
      .state('terms', {
        url: '/terms',
        templateUrl: 'js/templates/_frame_terms.html',
        onEnter: function ($rootScope) {
          $rootScope.optMenu = null;
          $rootScope.showMenu = true;
        }
      })
      .state('tips', {
        url: '/tips',
        templateUrl: 'js/templates/_frame_tips.html',
        onEnter: function ($rootScope) {
          $rootScope.optMenu = null;
          $rootScope.showMenu = true;
        }
      })
      .state('faq', {
        url: '/faq',
        templateUrl: 'js/templates/_frame_faq.html',
        onEnter: function ($rootScope) {
          $rootScope.optMenu = null;
          $rootScope.showMenu = true;
        }
      })
      .state('scheduleAdm', {
        url: '/schedule/adm',
        templateUrl: 'js/templates/_schedule_adm.html',
        onEnter: function ($rootScope) {
          $rootScope.optMenu = null;
          $rootScope.showMenu = true;
        }
      })
      .state('scheduleItemAdm', {
        url: '/schedule/adm/:scheduleId',
        templateUrl: 'js/templates/_schedule_item_adm.html',
        onEnter: function ($rootScope) {
          $rootScope.optMenu = null;
          $rootScope.showMenu = true;
        }
      })
      
      ;
    $urlRouterProvider.otherwise('/init');
  });
