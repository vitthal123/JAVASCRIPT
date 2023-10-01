let str='malayalam';
let revStr=str.split("").reverse().join("");
console.log(revStr);
if(str===revStr){
    console.log('String is Palindrom');
}else{
    console.log('String is Not Palindrom');
}