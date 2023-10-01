// 7. Write a JavaScript function to parameterize a string.
function string_parameterize(str){
    let str1=str.toLowerCase().split(" ").join('-');
    return str1;
}


console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"
