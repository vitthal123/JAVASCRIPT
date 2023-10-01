function myFunction() {
 
    // input string
    let str = "Visit geeksforGeeks!";
 
    // searching string with modifier i
    let n = str.search(/GeeksforGeeks/i);
 
    console.log(n);
 
    // searching string without modifier i
    let n1 = str.search(/GeeksforGeeks/);
 
    console.log(n1);
}
myFunction();