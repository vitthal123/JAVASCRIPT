let str='GeeksforGeeks is the computer'
+ ' science portal for geeks.';

patt=/geek/gi;
patt.compile(patt);

let txt=str.replace(patt,'GEEKS');

console.log(txt);