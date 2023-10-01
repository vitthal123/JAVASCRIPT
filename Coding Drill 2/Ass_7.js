// Assignment 7: Write a javaScript function to protect email addresses. The part before ‘@’ should be clipped into half followed by 3 dots (...)
// E.g: 
// Input: psakari123@gmail.com
// Output: psaka...@gmail.com

function protectEmailAddress(email){
    let v_email=email.split('@');
    let n=v_email[0].length/2;
    return v_email[0].slice(0,n)+'...@'+v_email[1];
}

let inputStr='psakari123@gmail.com';
let secureEmail=protectEmailAddress(inputStr);
console.log(secureEmail);