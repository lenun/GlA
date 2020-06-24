'use strict';

let
todoControl = document.querySelector('.todo-control'),
headerInput = document.querySelector('.header-input'),
todoList = document.querySelector('.todo-list'),
todoCompleted = document.querySelector('.todo-completed');

//создаем массив
let todoData =[];


let render = function(){
    todoList.textContent = '';
    todoCompleted.textContent = '';

//перебираем элементы,доб.новые
    todoData.forEach(function(item){
        let li = document.createElement('li');
        li.classList.add('todo-item');

        li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
        '<div class="todo-buttons">' +
            '<button class="todo-remove"></button>' +
            '<button class="todo-complete"></button>'+
        '</div>';
//условие при котором идет выборка куда добавлять элемент
        if(item.completed){
            todoCompleted.append(li);
        }else{
            todoList.append(li);
        }
// кнопка +
        let btntodoComplete = li.querySelector('.todo-complete');
        btntodoComplete.addEventListener('click', function(){
            item.completed = !item.completed;
            render();
        });
// корзина
        let btnremove = li.querySelector('.todo-remove');
        btnremove.addEventListener('click',function(){
            todoData = todoData.filter((remove) => remove.value !== item.value);
            render();
        });
        
    });
//добавляем в локал сторчж
    localStorage.setItem("todo", JSON.stringify(todoData));
};


//добавление новых дел
todoControl.addEventListener('submit',function(event){
    event.preventDefault();

    let newTodo = {
        value: headerInput.value,
        completed: false
    };
    if (newTodo.value !== '') {
        todoData.push(newTodo);
        render();
        headerInput.value = '';
      }
});
//получаем старые значения
let getPastData = function() {
    if (!localStorage.getItem('todo')) {
      let todo = [
        {
          value: "Выпить кофе",
          completed: false,
        },
        {
          value: "Сделать уборку",
          completed: true,
        },
      ];
      localStorage.setItem('todo', JSON.stringify(todo));
    }
    todoData = JSON.parse(localStorage.getItem('todo'));
  };
  
getPastData();
render();