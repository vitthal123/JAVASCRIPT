/**
 * 2) Finding minimum or maximum value from Array?
 */
const arr=[9,887,65,65,76]
const maxValue=(arr)=>
{
    return arr.reduce(function(pre,curr){
        return pre<curr?curr:pre
    })
}

console.log(maxValue(arr));

const minValue=(arr)=>
{
    return arr.reduce(function(pre,curr){
        return pre>curr?curr:pre
    })
}

console.log(minValue(arr));
