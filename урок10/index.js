'use strict';

const book = document.querySelectorAll('.book');//Коллекция заголовков книг
console.log(book);
//Ставим заголовки в правильном порядке//
book[0].before(book[1]);
book[2].before(book[4]);
book[2].before(book[3]);
book[2].before(book[5]);

//изменяем фоновый рисунок
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

//по тэгу находим место,где нужно поменять текст,и меняем 
book[4].getElementsByTagName('a')[0].innerHTML = 'Книша 3.this и Прототипы Объектов';

//удаляем рекламу,ищем еепо классу
document.querySelector('.adv').remove();

//создаем коллекцию из глав
const chapters = document.getElementsByTagName('li');
console.log(chapters);
//меняем главы в правильном порядке(2 книга)
chapters[15].after(chapters[8]);
chapters[9].before(chapters[11]);
chapters[9].before(chapters[13]);

//меняем главы в правильном порядке(5 книга)
chapters[37].before(chapters[45]);
chapters[41].after(chapters[39]);
chapters[44].after(chapters[42]);

let newChapters = document.createElement('li');

newChapters.textContent = 'Глава 8: За пределами ES6';

chapters[55].after(newChapters);
