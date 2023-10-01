/**
 * 4) Difference between filter and find
 */
const emp=[
    {name:'king',age:42},
    {name:'ali',age:32},
    {name:'ahmed',age:22},
    {name:'zain',age:62},
    {name:'ayesha',age:52},
    {name:'hafsa',age:28},
    {name:'sadi',age:27},
    {name:'rohma',age:26},
    {name:'masooma',age:25},
]

const filterItem=emp.filter((ele)=>{
    return ele.age>30
})
console.log(filterItem);

const findItem=emp.find((ele)=>{
    return ele.age>30
})
console.log(findItem);