let str='Every man in the world! Every woman on earth!';

patt=/man/g;
let txt=str.replace(patt,'Person');
console.log(txt);

// Every Person in the world! Every woPerson on earth!

// let str='Every man in the world! Every woman on earth!';

patt=/(wo)?man/g;
let txt1=str.replace(patt,'Person');
console.log(`After Compile : ${txt1}`);