// Assignment 8: Given an input string S that contains multiple words, you need to remove all the spaces present in the input string. There can be multiple spaces present after any word’
// E.g: 
// Input: "     I am      a     Web    Developer   "
// Output: IamaWebDeveloper

let inputStr='     I am      a     Web    Developer   ';
StringWithoutSpace(inputStr);

function StringWithoutSpace(str){
    let TrimStr=str.trim();
    let ArrStr=TrimStr.split(' ');
    console.log(ArrStr.filter((x)=> x!='').join(''));

}