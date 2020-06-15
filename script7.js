"use strict";
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }
const isNumber = number => {
    return (!isNaN(parseFloat(number)) && isFinite(number));
};

function game(){
    let num = getRandomArbitrary(0,100);
    let play;
    let attempt = 10; 
function start () {

        let useNum = prompt('Сможешь отгадать загаданное число от 1 до 100?');
    
        if(useNum === null) {
            let endPlay = confirm('Ой,вы уже уходите?');
            if(endPlay) {
                return 1;
            }
        }
        
        if(!isNumber(useNum)) {
            alert('Введи число!');
            return start();
        }
    
        if(useNum < num) {
            if (attempt > 0){
            prompt('Загаданное число больше,осталось попыток ',attempt--);}
            else{
                prompt('У вас не осталось попыток');
            }
            return start();
        }
    
        if(useNum > num) {
            if (attempt > 0){
                alert('Загаданное число меньше,осталось попыток',attempt--);}
                else{
                    alert('У вас не осталось попыток');
                }
                return start();
            }
        play = confirm('Вы выйграли');
    
      }
      start();
      
    }
game();


