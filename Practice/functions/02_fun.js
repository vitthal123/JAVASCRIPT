// 2. Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, 
// e.g., madam or nurses run.

function Palindrom(inputStr){
    let revStr=inputStr.split("").reverse().join("");
    if(inputStr===revStr){
        return 'Palindrome';
    }else{
        return 'Not Palindrome'
    }
}

let inp='nurses';
let result=Palindrom(inp);
console.log(result);