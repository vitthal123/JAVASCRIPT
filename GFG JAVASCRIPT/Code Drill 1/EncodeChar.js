let str='geek';
let encode="";
for(let i=0;i<str.length;i++){
    let as=str.charCodeAt(i);
    const character = String.fromCharCode(as+2);
    encode=encode+character;
}

console.log(encode);