'use strict';
let arr = ['2', '4', '100', '42', '32', '22', '299']; 

arr.forEach((rer) => {
  if (rer.startsWith('2') || rer.startsWith('4')) {
    console.log(rer);
  }
});

