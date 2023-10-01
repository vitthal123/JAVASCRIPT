/**
 * Arrange the word in sentenece in ascending order
 * Input  : gfg is a comp science learning platform
 * Output : a is gfg comp science learning platform
 */

function getWordInAscOrderOfLength(Inputstr){
    let splitStrArray=Inputstr.split(' ');
    let ar=splitStrArray.sort((x,y)=>x.length-y.length)
    return ar.join(" ")
}

let inp='gfg is a comp science learning platform';
let arr=getWordInAscOrderOfLength(inp);
console.log(arr);