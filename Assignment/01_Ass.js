/**
 * 1) How to find the duplicate element in Array? * 
 */
const arr=[1,2,8,2,9,8]
const duplicates=arr.filter((ele,index,arr)=>{
    return arr.indexOf(ele)!=index
})

console.log(duplicates);