var money = prompt('Ваш месячный доход?','50000'); //Доход в месяц
console.log(typeof money);

var income = 'хореограф'; //доп.доход
console.log(typeof income); 

var addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую',
'интернет');//расходы

var deposit = true;
prompt('Есть ли у вас депозит в банке?');
console.log(typeof deposit); 

var mission = 1000000; //стремление к накоплению
var period = Number(mission)/(Number(money)); // сроки
console.log( 'Период равен', period, 'месяцев' );
console.log( 'Цель заработать', mission, 'рублей' );
console.log(addExpenses.split());

var expenses1 = prompt('Введите обязательную статью расходов?','еда');
var amount1 =  prompt('Во сколько это обойдется?','10000');
var expenses2 = prompt('Введите обязательную статью расходов?','одежда');
var amount2 =  prompt('Во сколько это обойдется?','15000');
var budgetMonth = (Number(amount1)) +(Number(amount2));
console.log('Вам бюджет',budgetMonth,'на месяц');


var purpose = (Number(mission)) / ((Number(money)) - (Number(budgetMonth)));
console.log('Вам понадобиться',(Math.ceil(purpose)),'месяцев');

var budgetDay;
budgetDay = (Number(budgetMonth)) / 30;
console.log('Ты должен зарабатывать ', (Math.floor(budgetDay)), 'рублей');

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
