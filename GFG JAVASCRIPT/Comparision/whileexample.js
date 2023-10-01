const readlineSync=require('readline-sync');
let num=readlineSync.question('Enter the number ?');

while(num>=50){
    num=readlineSync.question('Enter the number less than 50 ?');
}

console.log('Number is accepted !!! ');