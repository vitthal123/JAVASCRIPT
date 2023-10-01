/**
 * Shallow Copy of Array
 * 
 */

let arr1=[1,2,3,4];
let arr2=arr1;

// simpling printing array 
console.log('Array 1',arr1);
console.log('Array 2',arr2);

//Updating the value in Array , It will change the original copy of array
arr2.push(5);
console.log('Updated Array 1',arr1);
console.log('Updated Array 2',arr2);