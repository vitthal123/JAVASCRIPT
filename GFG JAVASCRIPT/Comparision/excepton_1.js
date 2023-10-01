// let firstName;
let lastName='Vitthal';

try{
    console.log(firstName);
}catch(err){
    // console.log(err.name);
    // console.log(err.message);
    console.log(err.stack);
}
console.log(lastName);