function calculateSum(arr,property){
    let total=arr.reduce((acculator,object)=>{
        return acculator+object[property];
    },0)
   return total;
};

let arr=[
    {id:1,salary:10,age:20},
    {id:2,salary:20,age:30},
    {id:3,salary:30,age:40},
    {id:4,salary:40,age:50}
]

let result1=calculateSum(arr,'salary');
console.log(result1);

let result2=calculateSum(arr,'age');
console.log(result2);