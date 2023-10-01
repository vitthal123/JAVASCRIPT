/**
 * Spread Operator
 * 
 */
let arr1=[1,2,3,4];
let arr2=[...arr1];

// console.log(`Array 1 : ${arr1}`);
// console.log(`Array 2 : ${arr2}`);

// arr2.push(5);
// console.log(`Updated Array 1 : ${arr1}`);
// console.log(`Updated Array 2 : ${arr2}`);

let arr3=[];
for(let ele of arr1){
    arr3.push(ele);
}

arr3.push(5);
console.log(`Updated Array 1 : ${arr1}`);
console.log(`Updated Array 3 : ${arr3}`);

