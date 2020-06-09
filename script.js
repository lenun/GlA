'use strict';

let money = prompt('Ваш месячный доход?','50000'); //Доход в месяц
console.log(typeof money);

let income = 'хореограф'; //доп.доход
console.log(typeof income); 

let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
'интернет');//расходы

let deposit = confirm('Если ли у вас депозить в банке?');
console.log(typeof deposit); 

let mission = 1000000;
let period = Number(mission)/(Number(money)); // сроки
console.log( 'Период равен', (Math.trunc(period)), 'месяцев' );
console.log( 'Цель заработать', mission, 'рублей' );
console.log(addExpenses.split(','));

let expenses1 = prompt('Введите обязательную статью расходов?','еда');
let amount1 =  prompt('Во сколько это обойдется?','10000');
let expenses2 = prompt('Введите обязательную статью расходов?','одежда');
let amount2 =  prompt('Во сколько это обойдется?','15000');


let budgetMonth = (Number(money) - (Number(amount1)+Number(amount2)));
console.log('Вам бюджет',budgetMonth,'на месяц');


let purpose = (Number(mission)) / ((Number(money)) - (Number(budgetMonth)));
console.log('Вам понадобиться',(Math.ceil(purpose)),'месяцев');

let budgetDay;
budgetDay = (Number(budgetMonth)) / 30;
console.log('Бюджет на день: ', (Math.floor(budgetDay)));


if (budgetDay  >= 1200 ){
    console.log('У вас высокий уровень дохода');
}else if(budgetDay >= 600 && budgetDay < 1200 ){
    console.log('У вас средний уровень дохода');
}else if(budgetDay < 600){
    console.log('У вас низкий уровень дохода');
}else if(budgetDay === 0){
    console.log('Вы не зарабатываете ');
}else {
    console.log('Упс, что то пошло не так');
}

