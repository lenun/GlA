"use strict";

const isNumber = number => {
    return (!isNaN(parseFloat(number)) && isFinite(number));
};

function game(){
    let num=56;
    let play;

function start () {

        let useNum = prompt("Сможешь отгадать загаданное число от 1 до 100?");
    
        if(useNum === null) {
            let endPlay = confirm("Ой,вы уже уходите?");
            if(endPlay) {
                return 1;
            }
        }
        
        if(!isNumber(useNum)) {
            alert("Введи число!");
            return start();
        }
    
        if(useNum < num) {
            alert("Загаданное число больше");
            return start();
        }
    
        if(useNum > num) {
            alert("Загаданное число меньше");
            return start();
        }
    
        play = confirm('Вы выйграли');
    
      }
      start();
    }
game();
