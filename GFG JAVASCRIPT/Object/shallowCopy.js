/**
 * Shallow Copy * 
 */

// let student={
//     fname:'Vitthal',
//     lname:'Manekar',
//     age:35
// }

// let student2=student;

// student.fname='Rajesh';

// console.log(student);
// console.log(student2);

/**
 * one level of Deep Copy
 *  
 */
// let student2=Object.assign({},student);
// student.fname='Rajesh';
// console.log(student);
// console.log(student2);

let person={
    fname:'Vitthal',
    lname:'Manekar',
    age:35,
    address:{
        city:'Akola',
        state:'MH'
    }  
}

let person1=Object.assign({},person);
person1.fname='Rajesh';
person1.address.city='Pune';

console.log(person);
console.log(person1);
