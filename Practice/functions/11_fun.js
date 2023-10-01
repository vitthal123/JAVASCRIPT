// 11. Write a JavaScript function that takes an array of numbers and 
// finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4

function diff(x,y){
    return x-y;
}

let arr=[1,4,2,5,7,3];
arr.sort(diff);
console.log(arr[1],arr[arr.length-2]);