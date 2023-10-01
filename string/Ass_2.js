// 2. Write a JavaScript function to check whether a string is blank or not.
function is_Blank(str){
    if(str.trim()==''){
        return true;
    }
    return false;
}

console.log(is_Blank(''));
console.log(is_Blank('abc'));
console.log(is_Blank('  '));

