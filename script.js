'use strict';

let isNumber =function(n){
return !isNaN(parseFloat(n)) && isFinite(n);
};
let money ,
income = 'хореограф',
addExpenses = prompt('Перечислите возможные расходы ','интернет'),
deposit = confirm('Если ли у вас депозить в банке?'),
mission = 1000000;


let start = function(){
do{
money = prompt('Ваш месячный доход?');
}
while(!isNumber(money));
};
start();


let showTypeOf = function(data){
console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


console.log( 'Цель заработать', mission, 'рублей' );
console.log(addExpenses.split(','));

let expenses=[];
  
let getExpensesMonth = function(){
    let sum = 0; 
 for(let i=0; i < 2; i++){
    expenses[i]= prompt('Введите обязательную статью расходов?');
    sum += + prompt('Во сколько это обойдется?');
 }
 console.log(expenses);
 return sum;
};
let expensesAmountMonth = getExpensesMonth();
console.log('Расходы за месяц:',expensesAmountMonth);



function getAccumulatedMonth (){
const sum = Number(money) - expensesAmountMonth;
return sum;
}
console.log('Накопления за месяц:',getAccumulatedMonth());


let accumulatedMonth = getAccumulatedMonth();


function getTargetMonth (){
const sum = Math.trunc(mission / accumulatedMonth);
if(sum >0){
console.log('Цель будет достигнута через :',sum,'месяцев');
}else if (sum < 0){
console.log('Цель не будет достигнута');
}
}
getTargetMonth();


let budgetDay;
budgetDay = (accumulatedMonth) / 30;
console.log('Бюджет на день: ', (Math.floor(budgetDay)));


let getStatusIncome = function(){
if (budgetDay >= 1200 ){
return('У вас высокий уровень дохода');
}else if(budgetDay >= 600 && budgetDay < 1200 ){
return('У вас средний уровень дохода');
}else if(budgetDay < 600){
return('У вас низкий уровень дохода');
}else if(budgetDay === 0){
return('Вы не зарабатываете ');
}else {
return('Упс, что то пошло не так');
}};
console.log(getStatusIncome());
