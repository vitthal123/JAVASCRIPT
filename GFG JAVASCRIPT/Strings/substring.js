let userEmail='VitthalManekar@gmail.com';

let userName=userEmail.substring(0,14);

let index=userEmail.indexOf('@');

// console.log(userName);

// console.log(index);

console.log(`UserName : ${userEmail.substring(0,index)}`);
console.log(`Domain : ${userEmail.substring(index+1)}`);