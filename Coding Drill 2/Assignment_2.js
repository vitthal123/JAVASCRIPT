/**
 * Reverse the word of string without changing the order
 * INPUT  : react is a library
 * OUTPUT : tcaer si a yrarbil
 */

function getReverseWordInString(InputStr){
    let reverseStr=InputStr.split(' ').map((x)=>x.split('').reverse().join(''))
    return reverseStr.join(' ');
}

let str='react is a library';
let revstr=getReverseWordInString(str);
console.log(revstr)