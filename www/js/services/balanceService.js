(function() {
'use strict';

    angular
        .module('TaskidsApp')
        .service('BalanceService', BalanceService);

    BalanceService.$inject = [];

    function BalanceService() {
        var _balanceList = [];

        var _loadBalance = function(childrenId) {
            return getBalanceList();
        };

        var _getTotal = function(childrenId) {
            if (_balanceList === null || _balanceList.length === 0) 
                _balanceList = _loadBalance(childrenId);

            var total = 0, index = 0;
            for (index = 0; index < _balanceList.length; index++) {
                if (_balanceList[index].done === true)
                    total += _balanceList[index].when_done;
                else    
                    total -= _balanceList[index].when_gone;
            }
            return total;
        };

        return {
            loadBalance: _loadBalance,
            getTotal: _getTotal
        };
    }
})();