'use strict';

const 
    buttonCalculate = document.querySelector('#start'),
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
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalExpenses1 = document.querySelector('.additional_expenses'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    periodSelect = document.querySelector('.period-select'),
    periodAmount = document.querySelector('.period-amount'),
    targetAmount = document.querySelector('.target-amount'),
    incomeItems = document.querySelectorAll('.income-items'),
    main = document.querySelector('.main');

console.log(buttonCalculate,buttonPlus1,buttonPlus2,checkBox,additionalIncomeItem,
    budgetMonthValue,budgetDayValue,expensesMonth,additionalIncome,additionalExpenses,
    incomePeriod,targetMonth,salaryAmount,incomeTitle,expensesTitle,expensesItems,additionalExpenses1,
additionalExpensesItem,periodSelect,periodAmount,targetAmount,incomeItems,main);