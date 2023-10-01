// polyfills for reduce

function getSum(acc,cur)
{
    return acc+cur;
}

Array.prototype.myReduce= function ( callback , intialValue)
{
    let acc = intialValue ? intialValue : this[0];
    for(let i = intialValue ? 0 : 1 ; i < this.length ; i++)
    {
        acc=callback.call( this , acc , this[i] , i , this);
    }
    return acc;
}

let arr=[1,2,3,4,5];
let total=arr.myReduce(getSum,8);
console.log(total);