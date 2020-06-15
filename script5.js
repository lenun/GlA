"use strict";

// global
const isNumber = number => !isNaN(parseFloat(number)) && isFinite(number);

let 
    money = 0,
        start = () => {
        do {
            money = prompt("Ваш ежемесячный доход?", 50000);
        } while (!isNumber(money));

        return money;
    };

start();

let appData = {
    income: {},
    addIncome: [],
    budget: money,
    budgetDay: 0,
    budgetMonth: 0,
    expenses: {},
    expensesMonth: 0,
    addExpenses: [],
    deposit: false,
    mission: 100000,
    period: -1,
    asking: () => {
        appData.addExpenses = prompt("Перечислите возможные расходы через запятую", 
            "еда, курсы, топливо").toLowerCase().split(',');

        appData.deposit = confirm("Есть ли у вас депозит в банке?");


        for (let i = 0; i < 2; i++) {

            let expenseName = prompt("Введите обязательную статью расходов", "еда");
            let expenseMoney = 0;
    
            do {
                expenseMoney = prompt("Во сколько это обойдётся", 5000);
            } while (!isNumber(expenseMoney));

            appData.expenses[expenseName] = +expenseMoney;
        }
    },
    getExpensesMonth: () => {
        for (let key in appData.expenses) {
            appData.expensesMonth += appData.expenses[key];
        }
    
        return appData.expensesMonth;
    },
    getBudget: () => {
        appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = appData.budgetMonth / 30;
    
        return appData.budgetMonth;
    },
    getTargetMonth: (ammountMission, ammoutAccumulatedMonth) => ammountMission / ammoutAccumulatedMonth,
    getStatusIncome: budget => {
        if(budget > 1200) {
            return ("У вас высокий уровень дохода");
        } else if(budget >= 600 && budget  <= 1200) { // чтобы работало нормально при 600 и 1200
            return ("У вас средний уровень дохода");
        } else if(budget < 600 && budget >= 0) {
            return ("К сожалению у вас уровень дохода ниже среднего");
        } else { // последние возможный вариант - отрицательное значение
            return ("Что то пошло не так");
        }
    },


};

appData.asking();
appData.getExpensesMonth();

console.log('Расходы за месяц: ', appData.expensesMonth);

appData.getBudget();

let targetMonth = appData.getTargetMonth(appData.mission, appData.budgetMonth);

if(targetMonth > 0 && targetMonth !== Infinity) {
    console.log("Данная цель будет достигнута за %d месяцев", targetMonth);
} else {
    console.log("Данная цель не будет достигнута");
}


console.log( appData.getStatusIncome(appData.budgetDay) );

console.log("Наша программа включает в себя данные: ");

for (let key in appData) {
    console.log(String(key) + ": " + String(appData[key]));
}
