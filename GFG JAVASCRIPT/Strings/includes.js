//count No of vowels
const str="I am the mentor at gfga";
const vowel="aeiou";
let cnt=0;

for(let char of str.toLowerCase()){
    if(vowel.includes(char)){
        cnt+=1;
    }

}

console.log(`count of vowel in string ${cnt}`);