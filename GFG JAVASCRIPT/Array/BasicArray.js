let studentName=['vitthal','ram','ashwin','pritam','shirish','shubhang','jay','vimal'];

let arrLength=studentName.length;
console.log(`Array Length ${arrLength}`);

/** Iterating the Array */
// for(let i=0;i<arrLength;i++){
//     console.log(`the student ${i} ==> ${studentName[i].toUpperCase()}`);
// }


/**Iterating array with 
 * 
 * let of :- it is printing the element
 * */

// for(let name of studentName){
//     console.log(name.toUpperCase());
// }


/**
 * let in : - it is giving the index of array element
 */

for(let i in studentName){
    console.log(`${i}  ====>  ${studentName[i].toUpperCase()}`);
}

