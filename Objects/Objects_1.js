const emp_details={
    first_name:'Vitthal',
    last_name:'Manekar',
    Degree:{
        Graduate:'BE',
        PG:'ME'
    }
}
emp_details.city="Akola";
console.log(emp_details);
console.log(Object.entries(emp_details));



// console.log(emp_details);
// console.log(emp_details.Degree);
// console.log(Object.keys(emp_details));
// console.log(Object.values(emp_details));
// console.log(Object.entries(emp_details));

// console.log(emp_details.hasOwnProperty('Address'));
// console.log(emp_details.hasOwnProperty('Degree'));

// for(let i in emp_details)
// {
//     console.log(`Keys ${i}  values ${emp_details[i]}`);
// }