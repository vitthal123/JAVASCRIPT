// 2. Write a JavaScript function to clone an array.
// var array_Clone = function(arra1) {
//     return arra1.slice(0);
//        };
//    console.log(array_Clone([1, 2, 4, 0]));
//    console.log(array_Clone([1, 2, [4, 0]]));

let arr=[1, 2, 4, 0];
let arr1=arr.slice(0);
arr.push(6);
console.log(arr1);