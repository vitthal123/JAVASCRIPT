/**
 * 6) Finding odd / even number from Array
 */

const numbers=[1,2,3,8,9,12,16]
const even=numbers.filter((ele)=> ele%2===0)
const odd=numbers.filter((ele)=> ele%2==!0)

console.log(even);
console.log(odd);


