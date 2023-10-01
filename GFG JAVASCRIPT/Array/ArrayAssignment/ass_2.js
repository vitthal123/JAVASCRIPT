// Input:
// n = 4
// arr[] = {1,2,3,4}
// x = 3
// Output: 2
// Explanation: There is one test case 
// with array as {1, 2, 3 4} and element 
// to be searched as 3.  Since 3 is 
// present at index 2, output is 2.

function search(n,arr,x){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===x){
            index=i;
            break;
        }
    }
    return index;
}

let num=4;
let arr=[1,2,3,4];

let result=search(num,arr,3);
console.log(result);