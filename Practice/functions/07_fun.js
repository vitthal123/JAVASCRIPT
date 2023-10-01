// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

function getVowelCnt(inpStr){
    let Cnt=0;
    let vowel=['a','e','i','o','u'];
    let inpLowerStr=inpStr.toLowerCase();
    for(let i=0;i<inpLowerStr.length;i++){
        if(vowel.includes(inpLowerStr[i])){
            Cnt++;
        }
    }
    return Cnt;
}

let res=getVowelCnt('The quick brown fox')
console.log(res);