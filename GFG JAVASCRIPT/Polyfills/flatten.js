// polyfills for flat
let arr=[1,2,3,4,[5,6],[[7,8]]];
// let arr1=arr.flat(Infinity)
// console.log(arr1);


Array.prototype.myFlat=function(depth=1){
    let tempArr=[];
    function getFlattenArr(array,depth){
        for(let element of array){
            if(Array.isArray(element) && depth){
                getFlattenArr(element,depth-1)
            }
            else{
                tempArr.push(element);
            }
        }
    }
    getFlattenArr(this,depth);
    return tempArr;
}

let arr1=arr.myFlat(2)
console.log(arr1);