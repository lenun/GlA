'use strict';

const
    start = document.querySelector('#start'),
    cancel = document.getElementById("cancel"),
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
    dataSection = document.querySelector(".data"),
    dataInputs = dataSection.getElementsByTagName("input"),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),


    additionalIncomeAmount = document.querySelector('.additional_income-amount'),
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    incomeAmount = document.querySelector('.income-amount'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesAmount = document.querySelector('.expenses-amount'), 
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpenses1 = document.querySelector('.additional_expenses'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    targetAmount = document.querySelector('.target-amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    main = document.querySelector('.main'),
   inputElements = document.querySelectorAll('input[type="text"]');

//не нужный консоль лог,но мне так удобней...
//     console.log(start,buttonPlus1,buttonPlus2,checkBox,additionalIncomeItem,
//         budgetMonthValue,budgetDayValue,expensesMonth,additionalIncome,additionalExpenses,
//         incomePeriod,targetMonth,salaryAmount,incomeTitle,expensesTitle,expensesItems,additionalExpenses1,
//     additionalExpensesItem,periodSelect,periodAmount,targetAmount,incomeItems,main);



//проверка на число 
let isNumber =function(n){
return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let slider;
let slidernumber;

class AppData {
  constructor(){
    this.addincome = [];
    this.addExpenses = [];
    this.incomeMonth = 0;
    this.income = {};
    this.expenses = {};
    this.deposit = false;
    this.budget = money;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.expensesMonth = 0;
    this.pencentDeposit = 0;
    this.moneyDeposit = 0;
    this.showResultStatus = false;
}
start(){
  if (salaryAmount.value  !== ''){
    
    inputElements.forEach( element => {
      element.disabled = true;
  });
  start.style.display = 'none';
  cancel.style.display = 'inline';

this.budget = +salaryAmount.value;
this.getExpenses();
this.getExpensesMonth();
this.getIncome();
this.getAddExpenses();
this.getBudget();

this.getAddInCome();

this.showResult();

}else {
  start.disabled=true;
  alert('Введите обязательное поле :месячный доход');

}
}
reset() {
    this.addIncome = [];
    this.addExpenses = [];
    this.expenses = {};
    this.income = {};
    this.expensesMonth = 0;
    this.incomeMonth = 0;
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;

    inputElements.forEach( element => {
        element.value = null;
        element.disabled = false;
    });
    this.showResultStatus = false;

    expensesItems.forEach( (element, index) => {
        if(index > 0) {
            element.remove();
        }

    });
    incomeItems.forEach( (element, index) => {
        if(index > 0) {
            element.remove();
        }

    });
    buttonPlus1.style.display = 'inline';
    buttonPlus2.style.display = 'inline';
    periodSelect.value = 1;
    periodAmount.textContent = periodSelect.value;
    checkBox.checked = false; 
    start.style.display = 'inline';
    cancel.style.display = 'none';
}

//вывод на страницу наших функций на заданные места
showResult(){

budgetMonthValue.value = this.budgetMonth;
budgetDayValue.value = Math.ceil(this.budgetDay);
expensesMonth.value = this.expensesMonth;
additionalExpenses.value = this.addExpenses.join(' ');
additionalIncome.value =this.addincome.join(', ');
targetMonth.value = Math.ceil(this.getTargetMonth());
incomePeriod.value = this.calcSavedMoney();
this.caValuelcIncomePeriod();
this.getPeriod();

this.showResultStatus = true;

}

// работа кнопки №2
addExpensesBlock(){
const expensesItems = document.querySelectorAll('.expenses-items');
const cloneExpensesItem = expensesItems[0].cloneNode(true);
expensesItems[0].parentNode.insertBefore(cloneExpensesItem,buttonPlus2);

if(expensesItems.length === 2){
    buttonPlus2.style.display = 'none';
}
}

// работа кнопки №1
addIncomeBlock(){
    let  incomeItems = document.querySelectorAll('.income-items');
    let cloneIncomeItems = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItems,buttonPlus1);

    if(incomeItems.length === 2){
        buttonPlus1.style.display = 'none';
    }
    }

//обязательные расходы 
getExpenses(){
    expensesItems.forEach((item) => {
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !==''){
            this.expenses[itemExpenses]= +cashExpenses;
        }
    
});
}

//дополнительные доходы
getIncome() {
    incomeItems.forEach((item) => {
      const itemIncome = item.querySelector(".income-title").value;
      const cashIncome = item.querySelector(".income-amount").value;
      if (itemIncome !== "" && cashIncome !== "") {
        this.income[itemIncome] = +cashIncome;
      }
    });
    for (let key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  }
//возможные расходы
getAddExpenses() {
    let addExpenses = additionalExpensesItem.value.split(",");
    addExpenses.forEach((item) => {
      item = item.trim();
      if (item !== "") {
        this.addExpenses.push(item);
      }
    });
}

//возможный доход
getAddInCome (){
    additionalIncomeItem.forEach((item) => {
        const itemValue = item.value.trim();
        if(itemValue !== ''){
            this.addincome.push(itemValue);
        }
    });
}

//расход за месяц
getExpensesMonth(){
  for (let key in this.expenses) {
    this.expensesMonth += this.expenses[key];
  }
  return this.expensesMonth;
}

//бюджет
getBudget (){
    this.budgetMonth = (this.budget + this.incomeMonth) - this.expensesMonth;
  this.budgetDay = Math.trunc(this.budgetMonth / 30);
}

//срок достижения
getTargetMonth(){
  return targetAmount.value / this.budgetMonth;
}
//накопления за период
calcSavedMoney (){
    return this.budgetMonth * periodSelect.value;
 }

//сохранения накоплений за период
caValuelcIncomePeriod () {
   incomePeriod .value = this.calcSavedMoney();
 }
 //меняем значения накопления после расчета + изменяем число под селектом
getPeriod() {
   periodAmount.textContent = periodSelect.value;
   this.caValuelcIncomePeriod();
 }
 // проверка значений в месячном доходе 
check() {
  if (salaryAmount.value  === '' ){
     return alert('Введите обязательное поле : месячный доход');
  }else {
   console.log('все ок');
  }
}
eventsListeners(){
    start.addEventListener('click', appData.start.bind(appData));
    cancel.addEventListener('click', appData.reset.bind(appData));
    buttonPlus2.addEventListener('click',appData.addExpensesBlock);
    buttonPlus1.addEventListener('click',appData.addIncomeBlock);
    periodSelect.addEventListener('input',appData.getPeriod);
    periodAmount.addEventListener('change', appData.caValuelcIncomePeriod);
    salaryAmount.addEventListener('input', () => {
      if(salaryAmount.value !== '') {
          start.disabled = false;
      }
});}
}
const appData = new AppData();
appData.eventsListeners();
console.log(appData);

