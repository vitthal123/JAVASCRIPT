const emp_details={
    first_name:'Vitthal',
    last_name:'Manekar',
    Degree:{
        Graduate:'BE',
        PG:'ME'
    }
}
for(let i in emp_details)
{
    console.log(`Keys ${i}  values ${emp_details[i]}`);
}