// 1. Write a JavaScript function to check whether an 'input' is a string or not.

function is_string(str){
    console.log(typeof str);
    if(typeof str=="string"){
        return true;
    }
    return false;
}


console.log(is_string('w3resource'));
// true
console.log(is_string([1, 2, 4, 0]));
// false
