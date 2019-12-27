function getActivityMockList() {
    return [
            { title: 'Li\u00E7\u00E3o de casa', id: 1, when_done: 30, when_gone: -16, when_forgotten: 0, done: true, selected: false },
            { title: 'Escovar os dentes', id: 2, when_done: 20, when_gone: -16, when_forgotten: 0, done: false, selected: false },
            { title: 'Tomar banho', id: 3, when_done: 10, when_gone: -16, when_forgotten: 0, done: false, selected: false }
    ];
};

function getActivityWeekMockList() {
    return [
            { title: 'Estudar ingl\u00EAs', id: 4, when_done: 30, when_gone: -16, when_forgotten: 0, done: true, selected: false },
            { title: 'Estudar matem\u00E1tica', id: 5, when_done: 20, when_gone: -16, when_forgotten: 0, done: false, selected: false }
    ];
};

function getBalanceList() {
    return [
            { title: 'Li\u00E7\u00E3o de casa', id: 1, when_done: 30, when_gone: 16, when_forgotten: 0, done: true, selected: false },
            { title: 'Escovar os dentes', id: 2, when_done: 20, when_gone: 16, when_forgotten: 0, done: false, selected: false },
            { title: 'Estudar matem\u00E1tica', id: 5, when_done: 14, when_gone: 12, when_forgotten: 0, done: true, selected: false }
        ];
};

function getRewardList() {
    return [
            { title: 'Ir ao cinema', id: 1, weekend: true, price: 20, selected: false },
            { title: 'Ir ao shopping', id: 2, weekend: true, price: 15, selected: false },
            { title: 'Ir ao espetinho', id: 3, weekend: true, price: 40, selected: false },
            { title: 'Almocar no shopping', id: 4, weekend: false, price: 55, selected: false },
            { title: 'Comer chocolate', id: 5, weekend: false, price: 20, selected: false }
    ];
};

function getChildrenList() {
    return [
            { name: 'Henrique', id: 1, age: 7, nikename: 'Ike', selected: false },
            { name: 'Luma', id: 2, age: 5, nikename: 'PepeLuminha', selected: false }
    ];
};
