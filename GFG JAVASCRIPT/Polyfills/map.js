// Polyfills for map

let arr=[1,2,3,4,5,6];
// console.log(typeof arr);

function getSquaredOfNum(number){
    return number**2;
};

Array.prototype.myMap=function(callback){
    let tempArr=[];
    for(let i=0;i<this.length;i++){
        tempArr.push(getSquaredOfNum(this[i],i,this));        
    }
    return tempArr;
}

let arr1=arr.myMap(getSquaredOfNum);
console.log(arr1);