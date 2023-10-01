// Optional Chaining
let student={
    fname:'Vitthal',
    lname:'Manekar',
    // address:{
    //     city:'Pune',
    //     state:'Akola'
    // }
    greetMessage:function(){
        console.log('Welcome Vitthal ...');
    }
}

console.log(student.fname);
console.log(student.address?.city);

student.greetMessage();
student.greetMessage1?.();


