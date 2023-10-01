function getObjects(name,course){
    return{
        name,
        course
    }
}

let student=getObjects('Vitthal','ME');
console.log(student);

// let student1=getObjects('Ram','BE');
// console.log(student1);

let firstName='Vitthal';
let lastName='Manekar';
console.log({firstName,lastName});