
'use strict';
let arr = ['2', '4', '100', '42', '32', '22', '299']; 

arr.forEach((rer) => {
  if (rer.startsWith('2') || rer.startsWith('4')) {
    console.log(rer);
  }
});
const simpleNumber =function(number){
    for (let i = 2; i < number; i++) {
        if(number % i === 0) {
            return 0;
        }

    }return number > 1;
};
for (let i = 1; i <= 100; i++) {
    if(!simpleNumber(i)) {
        continue;
    } else {
        console.log(i,'Делители : 1 и', i);
    }
}
