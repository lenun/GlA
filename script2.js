

"use strict";

let userNumber;

let isNumber = function (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  };

function guessNumber(message) {
    if(message) {
        alert(message);
    }
    let number = 10;
    userNumber = prompt("Guess number from 1 to 100: ");

    function getNumber() {
         if (userNumber === null) {
            return;
        } else if (!isNumber(userNumber)) {
            return guessNumber("enter number ");
        } else if(number > userNumber) {
            return guessNumber("number is higher than you guessed, try again ");
        } else if (number < userNumber) {
            return guessNumber("number is less than you guessed, try again ");
        } else {
            return alert("correct!");
        }
    }
    console.dir(getNumber);
    return getNumber();
}

const play = guessNumber();
console.log(play);