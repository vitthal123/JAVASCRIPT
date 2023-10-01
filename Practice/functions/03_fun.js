// 3. Write a JavaScript function that generates all combinations of a string.

function generatesCombinations(inputStr){    
    let arr=[]
    for(let i=0;i<inputStr.length;i++){    
        let st="";           
        for(let j=i;j<inputStr.length;j++){
            st=st+inputStr[j];
            arr.push(st);
        }
    }
    console.log(arr.join(","))
}

generatesCombinations('dog')
