'use strict';

let str = prompt('Напиши что нибудь');

function request(str){
    if(isNaN(str) !== true ){
        alert('Это не строка!!!');
    }else if (isNaN(str) === true ) {
       str = str.trim();
       alert(str);
    } else if (str.length > 30) {
       str =str.slice(0,30) + '...';
}
}
request(str);
