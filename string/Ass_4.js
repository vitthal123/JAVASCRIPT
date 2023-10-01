// 4. Write a JavaScript function to extract a specified number of characters from a string.
function truncate_string(str,n){
    let st=str.substring(0,n);
    return st;
}


console.log(truncate_string("Robin Singh",4));
// "Robi"