(function() {
'use strict';

    angular
        .module('TaskidsApp')
        .factory('ChildrenService', ChildrenService);

    ChildrenService.$inject = [];

    function ChildrenService() {
       
        var _loadChildren = function() {
            return getChildrenList();
        };
        
        return { 
            loadChildren : _loadChildren
        };
    }
})();

