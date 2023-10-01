let readlineSync=require('readline-sync');
let course=readlineSync.question('Enter the course ?')


let studentObj={
    firstName:'Vitthal',
    lastName:'Manekar',
    [course]:'No Course'
}

studentObj.City='Akola';
studentObj.State='Maharashtra';

console.log(studentObj);

console.log(studentObj[course])