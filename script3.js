"use strict";

const isNumber = number => {
    return (!isNaN(parseFloat(number)) && isFinite(number));
};

function game(){
    let num = 66;
    let play;
    let attempt = 10;
function start(){
let question = prompt("Сможешь отгадать загаданное число от 1 до 100?");
   if(question === null) {
   let endPlay = confirm("Ой,вы уже уходите?");
   if(endPlay) {
      return 1;
            }
        }
   if(!isNumber(question)) {
      alert('Я так не играю! Введите число!');
      return start();
      }
   if(question < num) {
      attempt--;
      alert('Загаданное число больше,у вас осталость',attempt(),'попыток');
      return start();
      }
   if(question > num) {
      attempt--;
      alert('Загаданное число меньше,у вас осталость',attempt(),'попыток');
      return start();
      }
   play = confirm('Вы выйграли');
   }
   start();
   }
game();