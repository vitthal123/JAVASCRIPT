// 4. Write a JavaScript function to get the last element of an array.
//  Passing the parameter 'n' will return the last 'n' elements of the array.

function last(array,n){
    if(array==null){
        return void 0;
    }
    if(n==null){
        return array[array.length-1];
    }
    // console.log(array.length)
    // console.log(array.length - n)
    return array.slice(Math.max(array.length - n, 0));  
 
}



console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));