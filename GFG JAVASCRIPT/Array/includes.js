// let arr1=[1,2,3,5,6,7];
// let presentArray=arr1.includes(6);
// console.log(presentArray);

const readlineSync=require('readline-sync');
let availableSize=readlineSync.question("Enter the sizes of Shirts S|M|L|XL|XXL|XXXL|XXXXL ? ");
let availableSizeArr=['S','M','L','XL','XXL','XXXL','XXXXL'];

let isSizeAvailable=availableSizeArr.includes(availableSize);

if(isSizeAvailable){
    console.log('The Size is Available');
}else{
    console.log('The Size is Not Available');
}