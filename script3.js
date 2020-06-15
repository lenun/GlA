"use strict";

const doSth = function(params) {

    // #1
    if(typeof(params) !== 'string') {
        return console.log("[Warning] передана не строка");
    }

    params = params.trim();

    // #3
    if(params.length > 30) {

        params = params.slice(0, 30);
        params += '...';
    }


    return params;
};
let r = doSth('  abcdefgabcdefgabcdefgabcdefgabcdefg   '); // test
console.log(r, r.length);

r = doSth('  abcdefgabcdefgabcdefgabcdefgabcdefg'); // test
console.log(r, r.length);

r = doSth('abcdefgabcdefgabcdefgabcdefgabcdefg    '); // test
console.log(r, r.length);

r = doSth('5555555555');
console.log(r, r.length);