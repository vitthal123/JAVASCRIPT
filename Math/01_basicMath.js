let num=100.5345;
console.log(Math.floor(num));
console.log(Math.ceil(num));
console.log(num.toFixed(2));
console.log(num.toPrecision(5));
console.log(num.toPrecision(4));

//------------------------------------------------------

let arr=[3,8,2,0,5];
let min=Math.min(...arr)
let max=Math.max(...arr)
console.log(`Min : ${min} and Max : ${max}`);

//--------------------------------------------------------

let rad=Math.random();
console.log(rad);     // Giving value b/w 0 and 1
let Min=1;
let Max=10;
let generate_rad=Math.floor(rad*Max)+Min;
console.log(generate_rad);

// Finding the value from 10 to 20
// ------------------------------------------------------

let rad=Math.random();
console.log(rad);     // Giving value b/w 0 and 1
let Min=10;
let Max=20;
let generate_rad=Math.floor(rad*(Max-Min+1))+Min;
console.log(generate_rad);