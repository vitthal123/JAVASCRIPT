// let arr=[1,2,3,4,5,6,7,8,9,10];

// let newArrSum= arr.reduce((acc,ele)=> acc+ele,0);
// console.log(newArrSum);

let coursePrice=[
    {name:'Python',Fee:900},
    {name:'sql',Fee:800},
    {name:'Django',Fee:11000},
    {name:'Data Science',Fee:15000}   
]

let sum=coursePrice.reduce((acc,item)=>acc+item.Fee,0);
console.log(sum);