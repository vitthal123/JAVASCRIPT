// 5. Write a JavaScript function that accepts a string as a parameter and converts the first 
// letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

function CapitilizeFirstLetter(inputStr){
    let inpArr=inputStr.split(" ");
    let result=[];
    for(let i=0;i<inpArr.length;i++){
        result.push(inpArr[i][0].toUpperCase()+inpArr[i].slice(1));
    }
    return result.join(" ");
}

let res=CapitilizeFirstLetter('the quick brown fox');
console.log(res);