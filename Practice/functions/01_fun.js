
function reversesNo(num){
    let str=String(num);
    let revStr=str.split("").reverse().join("");
    // console.log(revStr);
    return Number(revStr);
}

let result=reversesNo(32243);
console.log(result);