  
'use strict';

let
    start = document.querySelector('#start'),
    buttonPlus1 = document.getElementsByTagName('button')[0],
    buttonPlus2 = document.getElementsByTagName('button')[1],
    checkBox = document.querySelector('#deposit-check'),
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),

    budgetMonthValue  = document.getElementsByClassName('result-total budget_month-value')[0],
    budgetDayValue  = document.getElementsByClassName('result-total budget_day-value')[0],
    expensesMonth = document.getElementsByClassName('result-total expenses_month-value')[0],
    additionalIncome = document.getElementsByClassName('result-total additional_income-value')[0],
    additionalExpenses = document.getElementsByClassName('result-total additional_expenses-value')[0],
    incomePeriod  = document.getElementsByClassName('result-total income_period-value')[0],
    targetMonth = document.getElementsByClassName('result-total target_month-value')[0],

    additionalIncomeAmount = document.querySelector(".additional_income-amount"),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'), 
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpenses1 = document.querySelector('.additional_expenses'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    targetAmount = document.querySelector('.target-amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    main = document.querySelector('.main');


//не нужный консоль лог,но мне так удобней...
    console.log(start,buttonPlus1,buttonPlus2,checkBox,additionalIncomeItem,
        budgetMonthValue,budgetDayValue,expensesMonth,additionalIncome,additionalExpenses,
        incomePeriod,targetMonth,salaryAmount,incomeTitle,expensesTitle,expensesItems,additionalExpenses1,
    additionalExpensesItem,periodSelect,periodAmount,targetAmount,incomeItems,main);
 console.log(incomePeriod,periodSelect,periodAmount);

//проверка на число 
let isNumber =function(n){
return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let slider;
let slidernumber;

let appData = {
   addincome: [],
   addExpenses: [],
   incomeMonth:0,
   income: {},
   expenses: {},
   deposit: false,
   budget: money,
   budgetDay: 0,
   budgetMonth:0,
   expensesMonth: 0,
   pencentDeposit: 0,
   moneyDeposit: 0,

   start: function(){
    if(salaryAmount.value !== ''){
        appData.budget = +salaryAmount.value;
        appData.getExpensesMonth();
        appData.getInCome();
        appData.getBudget();
        appData.getAddExpenses();
        appData.getAddInCome();
        appData.showResult();
    }else {
        console.error('Поле "месячный доход"-пустое');
      }
   },

   //вывод на страницу наших функций на заданные места
   showResult: function(){
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = Math.ceil(appData.budgetDay);
    expensesMonth.value = appData.expensesMonth;
    additionalExpenses.value = appData.addExpenses.join(', ');
    additionalIncome.value =appData.addincome.join(', ');
    targetMonth.value = Math.ceil(appData.getTargetMonth());
    incomePeriod.value = appData.calcSavedMoney();
    appData.caValuelcIncomePeriod();
    appData.getPeriod();

 
    },

   // работа кнопки №2
   addExpensesBlock: function(){
    let expensesItems = document.querySelectorAll('.expenses-items');
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem,buttonPlus2);

    if(expensesItems.length === 2){
        buttonPlus2.style.display = 'none';
    }
    },

    // работа кнопки №1
    addIncomeBlock: function(){
        let  incomeItems = document.querySelectorAll('.income-items');
        let cloneIncomeItems = incomeItems[0].cloneNode(true);
        incomeItems[0].parentNode.insertBefore(cloneIncomeItems,buttonPlus1);
    
        if(incomeItems.length === 2){
            buttonPlus1.style.display = 'none';
        }
        },

    //обязательные расходы 
    getExpenses: function(){
        expensesItems.forEach(function(item){
            let itemExpenses = item.querySelector('.expenses-title').value;
            let cashExpenses = item.querySelector('.expenses-amount').value;
            if(itemExpenses !== '' && cashExpenses !==''){
                appData.expenses[itemExpenses]=cashExpenses;
            }
        
    });
    },

    //дополнительные расходы
    getInCome : function(){
        incomeItems.forEach(function(item){
       let itemIncome = item.querySelector('.income-title').value;
       let cashIncome = item.querySelector('.income-amount').value;
       if (itemIncome !== '' && cashIncome !== ''){
           appData.income[itemIncome]= +cashIncome;
       } 
    });
    for(let key in appData.income){
        appData.incomeMonth += +appData.income[key];
    }
    },

    //возможные расходы
    getAddExpenses: function(){
    let addExpenses =  additionalExpensesItem.value.split(' ');
    addExpenses.forEach(function(item){
        item = item.trim();
        if(item !==' '){
            appData.addExpenses.push(item);
        }
    });
    },

    //возможный доход
    getAddInCome: function(){
        additionalIncomeItem.forEach(function(item){
            let itemValue = item.value.trim();
            if(itemValue !== ''){
                appData.addincome.push(itemValue);
            }
        });
    },

    //расход за месяц
    getExpensesMonth: function(){
      for (let key in appData.expenses) {
          appData.expensesMonth += appData.expenses[key];
      }
      return appData.expensesMonth;
   },

    //бюджет
    getBudget: function(){
      appData.budgetMonth = (appData.budget + appData.incomeMonth) - appData.expensesMonth;
      console.log(appData.budgetMonth);
        appData.budgetDay = Math.trunc(appData.budgetMonth / 30);
   },

   //срок достижения
    getTargetMonth : function (){
      return targetAmount.value / appData.budgetMonth;
   },

   //собственно,пока не нужная функция 
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

    //собственно,пока не нужная функция 
    getInfoDeposit: function(){
         if(appData.deposit && (!isNumber(this.pencentDeposit)) &&(!isNumber(this.moneyDeposit)) ){
            appData.pencentDeposit = prompt('Какой у вас годовой процент?','10');
            appData.moneyDeposit = prompt('Какая сумма заложена?',10000);
         }
      },
    
    //накопления за период
    calcSavedMoney: function(){
         return appData.budgetMonth * periodSelect.value;
      },
    //сохранения накоплений за период
    caValuelcIncomePeriod: function () {
        incomePeriod .value = appData.calcSavedMoney();
      },
      //меняем значения накопления после расчета + изменяем число под селектом
    getPeriod: function () {
        periodAmount.textContent = periodSelect.value;
        appData.caValuelcIncomePeriod();
      }
    };

    if (document.getElementsByTagName('button')[0].value !== '') {
            alert('введите что-то');
    } else {
        console.log('все ок');
    }

start.addEventListener('click',appData.start);

buttonPlus2.addEventListener('click',appData.addExpensesBlock);
buttonPlus1.addEventListener('click',appData.addIncomeBlock);
periodSelect.addEventListener('input', appData.getPeriod);




