const readlineSync=require('readline-sync');

const userName=readlineSync.question("May I know your Name ?");
const userAge=readlineSync.question("May I know your Age ?");

console.log(userName);
console.log(userAge);