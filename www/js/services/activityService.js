(function() {
'use strict';

    angular
        .module('TaskidsApp')
        .factory('ActivityService', ActivityService);

    ActivityService.$inject = [];

    function ActivityService() {
        var _loadActitityDayByChildren = function() {
            return getActivityMockList();
        };

        var _loadActitityWeekByChildren = function() {
            return getActivityWeekMockList();
        };

        var _loadActitity = function() {
            return getActivityMockList();
        };
        
        return { 
            loadActitityDayByChildren : _loadActitityDayByChildren,
            loadActitityWeekByChildren : _loadActitityWeekByChildren,
            loadActitity : _loadActitity
        };
    }
})();

