// 6. Write a JavaScript function that accepts a string as a parameter 
// and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

function getLongestWord(inpStr){
    let inpArr=inpStr.split(' ');
    let result=inpArr[0];
    for(let i=1;i<inpArr.length;i++)
    {
        if(result.length<inpArr[i].length){
            result=inpArr[i];
        }
    }
    return result;
}

let res=getLongestWord('Web Development Tutorial');
console.log(res);