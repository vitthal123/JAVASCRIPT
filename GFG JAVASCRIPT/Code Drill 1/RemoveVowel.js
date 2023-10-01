let vowel=["a","e","i","o","u"]
let str="I am tutor at GeekforGeeks";
let strWithoutVowel="";
for (let ch of str){
    if(!vowel.includes(ch.toLowerCase())){
        strWithoutVowel=strWithoutVowel+ch;
    }
}

console.log(strWithoutVowel);