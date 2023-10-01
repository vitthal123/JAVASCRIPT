const plainText="Geek";
let scrambleText="";

for(let i=0;i<plainText.length;i++){
    scrambleText+=String.fromCharCode(plainText.charCodeAt(i)+2);
    // String.fromCharCode(65);
}

console.log(scrambleText);

