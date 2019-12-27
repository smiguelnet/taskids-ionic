(function() {
'use strict';

    angular
        .module('TaskidsApp')
        .service('RewardService', RewardService);

    RewardService.$inject = [];

    function RewardService() {

        var _loadRewardByChildren = function() {
            return getRewardList();    
        };

        var _loadReward = function() {
            return getRewardList();
        };

        return {
            loadRewardByChildren: _loadRewardByChildren,
            loadReward: _loadReward
        }
    }
})();