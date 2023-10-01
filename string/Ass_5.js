// 6. Write a JavaScript function that hides email addresses to prevent unauthorized access.
function protect_email(email){
    let arr=email.split('@');
    let arr1=arr[0].split('_');
    let protectEmail=arr1[0]+'...'+arr[1];
    return protectEmail;

}

console.log(protect_email("robin_singh@example.com"));


