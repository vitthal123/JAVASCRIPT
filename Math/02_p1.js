// // // function toTitleCase(str) 
// // { 
// //   return str.replace(/\b\w/g, l => l.toUpperCase()); 
// // }  


// // console.log(toTitleCase('vitthal'));


// function deepClone(obj) 
// { 
//   return JSON.parse(JSON.stringify(obj)); 
// } 


// const st={
//     name:'vitthal',
//     address:{
//         city:'Akola',
//         state:'Maharashtra'
//     }
// }

// const st_deep=deepClone(st);
// st_deep.address.city='Latur';
// console.log(st_deep);
// console.log(st);


// function getUniqueElements(arr) 
// { 
//   return Array.from(new Set(arr)); 
// } 

// let newArr=[1,2,3,3,3,4,4,5,6]
// console.log(getUniqueElements(newArr));


function generateRandomString(length)
{ 
  const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
  let result =''; 
  for (let i = 0; i < length; i++) 
  { 
    const randomIndex = Math.floor(Math.random() * characters.length); 
    result += characters.charAt(randomIndex); 
  } 
  return result; 
} 

console.log(generateRandomString(6));