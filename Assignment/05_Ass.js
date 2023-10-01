/**
 * 5) Finding missing vale element in array?
 */
const arrNum=[1,2,3,4,5,6,9,10]
const missArr=[]
const missingValue=(arr)=>{
    let minVal=Math.min(...arr);
    let maxVal=Math.max(...arr);
    for(let i=minVal;i<maxVal;i++){
        if(arr.indexOf(i)<0){
            missArr.push(i)
        }
    }
    return missArr;
}

console.log(missingValue(arrNum));