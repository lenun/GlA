'use strict';

let isNumber =function(n){
return !isNaN(parseFloat(n)) && isFinite(n);
};
let money,
    start = function(){
      do{
      money = prompt('Ваш месячный доход?');
      }
      while(!isNumber(money));
      };
      start();

let appData = {
   income: {},
   addExpenses: [],
   expenses: [],
   deposit: false,
   mission: 1000000,
   budget: money,
   budgetDay: 0,
   budgetMonth:0,
   expensesMonth: 0,
   asking: function(){
      appData.addExpenses = prompt('Перечислите возможные расходы');
      appData.addExpenses =this.addExpenses.toLowerCase().split(',');
      appData.deposit = confirm('Есть ли у вас депозит в банке');
      for (let i = 0; i < 2; i++) {
         let expense = prompt("Введите обязательную статью расходов", "пропитание");
         let anower = 0;
         do{
        anower = +prompt("Во сколько это обойдётся");
         }while(!isNumber(anower));
      appData.expenses[expense] = anower;
         
     }
    },
     getExpensesMonth: function(){
      for (let key in appData.expenses) {
          appData.expensesMonth += appData.expenses[key];
      }
      return appData.expensesMonth;
   },
   getBudget: function(){
      appData.budgetMonth = appData.budget - appData.expensesMonth;
        appData.budgetDay = Math.trunc(appData.budgetMonth / 30);
   },
   getTargetMonth : function (){
      const sum = Math.trunc(appData.mission / appData.budgetMonth);
       if(sum >0){
      console.log('Цель будет достигнута через :',sum,'месяцев');
       }else if (sum < 0){
      console.log('Цель не будет достигнута');
       }
       
      },
      getStatusIncome : function(){
          if (appData.budgetDay >= 1200 ){
         return('У вас высокий уровень дохода');
         }else if(appData.budgetDay >= 600 && appData.budgetDay < 1200 ){
         return('У вас средний уровень дохода');
         }else if(appData.budgetDay < 600){
         return('У вас низкий уровень дохода');
         }else if(appData.budgetDay === 0){
         return('Вы не зарабатываете ');
         }else {
         return('Упс, что то пошло не так');
         }}
};
appData.asking();
appData.getExpensesMonth();
console.log('Расходы за месяц: ', appData.expensesMonth);
appData.getBudget();
appData.getTargetMonth();
console.log(appData.getTargetMonth(appData.mission,appData.budgetMonth));
console.log( appData.getStatusIncome(appData.budgetDay));

console.log("Наша программа включает в себя данные: ");

for (let key in appData) {
    console.log(key + ": " + appData[key]);
}


