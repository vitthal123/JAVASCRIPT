let arr=[10,17,61,54,44,32,39,23];

let sum=arr.reduce((x,y)=> y < 40 ? x + y : x ,0 );

console.log(sum);