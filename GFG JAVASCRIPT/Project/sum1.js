let arr=[1,2,3,4,5,6];
let sum=0;

// arr.forEach(e=>{
//     sum+=e;
// })

// Sum of Number less than 4
arr.forEach(e=>{
    if (e<4) {sum+=e;}
})

console.log(sum);