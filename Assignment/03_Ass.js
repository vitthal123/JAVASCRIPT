/**
 * 3) Finding second largest value in array?
 * 
 * step 1: finding Largest Value
 * step 2: find the index of largest val
 * step 3: delete index from Array using splice method
 * step 4: apply same logic that use for find the largest val
 * 
 */

const arr=[8,3,2,5,9,7,0];
const secondLargest=function(arr){
    let firstLarge=Math.max(...arr);
    let index=arr.indexOf(firstLarge);
    arr.splice(index,1);
    let secondLarge=Math.max(...arr);
    return secondLarge;
}

console.log(secondLargest(arr));

