function myFunction() {
 
    // input string
    let str = "Please visit gfG!";
    let txt=str.replace(/gfg/i,'GeekForGeeks');
    return txt;
}

let m=myFunction();
console.log(m);