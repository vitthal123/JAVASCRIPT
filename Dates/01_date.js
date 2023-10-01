/**
 * Date :
 * 1) toString()
 * 2) toDateString()
 * 3) toLocaleString()
 */

// let myDate=new Date();
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());

// let newDateForm_11=new Date('2023-01-14');
// console.log(newDateForm_11);
// console.log(newDateForm_11.toLocaleString());

// let newDateForm_12=new Date('2023/01/14');
// console.log(newDateForm_12);
// console.log(newDateForm_12.toLocaleString());

// let myDateFormat13=new Date(2023,0,14)
// console.log(myDateFormat13);
// console.log(myDateFormat13.toLocaleString());
// console.log(myDateFormat13.getTimezoneOffset());


// let myDateFormat13=new Date(2023,0,14,5,3)
// console.log(myDateFormat13);
// console.log(myDateFormat13.toLocaleString());
// console.log(myDateFormat13.getTimezoneOffset());


let myDate=new Date();
console.log(myDate.getTime());
let myDateFormat13=new Date(2023,0,14,5,3);
console.log(myDateFormat13.getTime());




console.log(myDate.toLocaleString('default', {
    weekday: "long",
    
}));
