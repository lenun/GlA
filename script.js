'use strict';

let isNumber =function(n){
return !isNaN(parseFloat(n)) && isFinite(n);
};

let capitalizeArray = array => {
   return array.map( word => {
       return (word.replace(word[0], word[0].toUpperCase()));
   });
};

let money,
    start = function(){
      do{
      money = prompt('Ваш месячный доход?',50000);
      }
      while(!isNumber(money));
      };
      start();

let appData = {
   income: {},
   addExpenses: [],
   expenses: {},
   deposit: false,
   mission: 1000000,
   budget: money,
   period : 3,
   budgetDay: 0,
   budgetMonth:0,
   expensesMonth: 0,
   pencentDeposit: 0,
   moneyDeposit: 0,
   asking: function(){
      if(confirm('У вас есть дополнительный источник заработка?')){
      let itemInCome;
      let cashInCome;
      do{
         itemInCome = prompt('Какой у вас дополнительный заработок','Фриланс');
      }while(isNumber(itemInCome));
      do{
      cashInCome = prompt('Сколько вы с него получаете в месяц?',10000);
      }while(!isNumber(cashInCome));

         appData.income[itemInCome]= +cashInCome;
      }
      let addExpenses = prompt('Перечислите возможные расходы','еда,кино,такси');

      addExpenses = addExpenses.replace(/\s+/g, '').toLowerCase().split(","); 

      appData.addExpenses = addExpenses;

      console.log(capitalizeArray(appData.addExpenses).join());

      appData.deposit = confirm('Есть ли у вас депозит в банке');
   
      for (let i = 0; i < 2; i++) {
         let anower = 0;
         let expense;
         do{
         expense = prompt("Введите обязательную статью расходов", "пропитание");
         }while(isNumber(expense));
       
         do{
        anower = +prompt("Во сколько это обойдётся",5000);
         }while(!isNumber(anower));

      appData.expenses[expense] = +anower;
         
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
       }},
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
         }},
      getInfoDeposit: function(){
         if(appData.deposit && (!isNumber(this.pencentDeposit)) &&(!isNumber(this.moneyDeposit)) ){
            appData.pencentDeposit = prompt('Какой у вас годовой процент?','10');
            appData.moneyDeposit = prompt('Какая сумма заложена?',10000);
         }
      },
      calcSavedMoney: function(){
         return appData.budgetMonth * appData.period;
      }
};
appData.asking();
appData.getExpensesMonth();
console.log('Расходы за месяц: ', appData.expensesMonth);
appData.getBudget();

let tMonth = appData.getTargetMonth(appData.mission, appData.budgetMonth);

if(tMonth > 0 && tMonth !== Infinity) {
    console.log('Данная цель будет достигнута за ', tMonth,'месяцев');
} else {
    console.log('Данная цель не будет достигнута');
}

console.log( appData.getStatusIncome(appData.budgetDay));


console.log("Наша программа включает в себя данные: ");

for (let key in appData) {
    console.log(String(key));
}


