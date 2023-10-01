//polyfills for filter

let arr=[1,2,3,4,5,6];

function getFilterArr(number){
    return number>3;
}

// let arr1=arr.filter(getFilterArr);
Array.prototype.myFilter=function(callback){
    let tempArr=[];
    for(let i=0;i<this.length;i++){
        if(callback(this[i]))             
        {
        // if(callback.call(this,this[i],i,this)){
            tempArr.push(this[i])
        }
    }
    return tempArr;
}

let arr1=arr.myFilter(getFilterArr);
console.log(arr1);