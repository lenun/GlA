'use strict';

class Todo  {
    constructor(form, input, list, completed){
        
        this.form = document.querySelector(form);
        this.input = document.querySelector(input);
        this.list= document.querySelector(list);
        this.completed = document.querySelector(completed);
        this.todoData = new Map(JSON.parse(localStorage.getItem('list')));

    }
    addToStorage(){
        localStorage.setItem('list',JSON.stringify([...this.todoData]));
    }

    render(){
        this.list.textContent = '';
        this.completed.textContent = '';
        this.todoData.forEach(this.createItem, this);
        this.addToStorage();
    }

    createItem(todo){
        const li = document.createElement('li');
        li.classList.add('todo-item');
        li.insertAdjacentHTML('beforeend',`
            <span class="text-todo">${todo.value}</span>
            <div class="todo-buttons">
            <button class="todo-remove"></button>
            <button class="todo-complete"></button>
            </div>
        `);
        if (todo.completed){
            this.completed.append(li);
        }else{
            this.list.append(li);
        }

    }


    addTodo(e){
        e.preventDefault();
        
        if(this.input.value.trim()){
            const newTodo = {
                value : this.input.value,
                completed : false,
                key : this.generateKey()
            };
            this.todoData.set(newTodo.key, newTodo);
            this.render();
        }
    }

    generateKey(){
        return '_' + Math.random().toString(36).substr(2, 9);
    }
    deleteItem(item) {
        this.todoData.delete(this.findObjectByValue(item)[0]);
        this.render();
    }

    completeItem(item) {
        const todo = this.findObjectByValue(item);
        todo[1].completed = !todo[1].completed;
        this.todoData.set(todo[0], todo[1]);
        this.render();
    }


    

    handler() {
        let updatedTodo, todoItem;
        document.addEventListener("click", e => {
            const target = e.target;
            const todo = target.closest(".todo-item");

            if (todo) {
                if (target.matches(".todo-remove")) {
                    this.deleteItem(todo.querySelector("span").textContent);
                }
                if (target.matches(".todo-complete")) {
                    this.completeItem(todo.querySelector("span").textContent);
                }
                if (target.matches(".todo-edit")) {
                    todo.querySelector("span").contentEditable = "true";
                    updatedTodo = todo.querySelector("span");
                    todoItem = this.findObjectByValue(updatedTodo.textContent);
                }
            }
            // save changes on click outside span
            if (updatedTodo && target !== updatedTodo && !target.matches(".todo-edit")) {
                updatedTodo.contentEditable = "false";

                // edit in case of updates
                if (todoItem[1].value !== updatedTodo.textContent) {
                    this.editItem(todoItem, updatedTodo.textContent);
                }
            }
        });
    }  
    init(){
        this.form.addEventListener('submit', this.addTodo.bind(this));
        this.render();
        this.handler();
    }
}

const todo = new Todo('.todo-control','.header-input','.todo-list','.todo-completed');

todo.init();
