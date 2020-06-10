'use strict';
let isNumber =function(n){
    return !isNaN(parseFloat(n)) && isFinite(n);
};
let money ,
    income = 'хореограф',
    addExpenses = prompt('Перечислите возможные расходы ','интернет'),
    deposit = confirm('Если ли у вас депозить в банке?'),
    mission = 1000000;

do{
    money = prompt('Ваш месячный доход?');
}
while(!isNumber(money));



let showTypeOf = function(data){
        console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

    

let period = Number(mission)/(Number(money)); 

console.log( 'Период равен', (Math.trunc(period)), 'месяцев' );
console.log( 'Цель заработать', mission, 'рублей' );
console.log(addExpenses.split(','));


let expenses1 = prompt('Введите обязательную статью расходов?','еда');
let amount1 =  prompt('Во сколько это обойдется?','10000');
let expenses2 = prompt('Введите обязательную статью расходов?','одежда');
let amount2 =  prompt('Во сколько это обойдется?','15000');


function getExpensesMonth (){
    while(isNaN){
    const sum = Number(amount1) + Number(amount2);
    return sum;
}
}
console.log('Cуммa всех обязательных расходов за месяц:',getExpensesMonth());

function getAccumulatedMonth (){
    const sum = Number(money) - (Number(amount2) + Number(amount1));
    return sum;
}
console.log('Накопления за месяц:',getAccumulatedMonth());

let accumulatedMonth =0;
accumulatedMonth = getAccumulatedMonth();


function getTargetMonth (){
    const sum = Math.trunc(mission / accumulatedMonth);
    if(sum >0){
        console.log('Цель будет достигнута через :',getTargetMonth(),'месяцев'); 
    }else if (sum < 0){
    console.log('Цель не будет достигнута');
}
}
getTargetMonth();



let budgetDay;
budgetDay = (accumulatedMonth) / 30;
console.log('Бюджет на день: ', (Math.floor(budgetDay)));

let getStatusIncome = function(){
if (budgetDay  >= 1200 ){
    return('У вас высокий уровень дохода');
}else if(budgetDay >= 600 && budgetDay < 1200 ){
    return('У вас средний уровень дохода');
}else if(budgetDay < 600){
    return('У вас низкий уровень дохода');
}else if(budgetDay === 0){
    return('Вы не зарабатываете ');
}else {
    return('Упс, что то пошло не так');
}
};
console.log(getStatusIncome());