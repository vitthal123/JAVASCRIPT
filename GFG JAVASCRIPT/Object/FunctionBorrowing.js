/**
 * Function Borrowing : call and apply
 * 
 */

let user1={
    fname:'Vitthal',
    lname:'Manekar'
}

let user2={
    fname:'Rajesh',
    lname:'Manekar'
}

let user3={
    fname:'Ashwini',
    lname:'Manekar'
}

function sayHi(){
    console.log('Welcome '+this.fname);
}

function greeting(degree,city){
    console.log(this.fname,degree,city);
}

// sayHi.call(user1);
// sayHi.call(user2);
// sayHi.call(user3);

// greeting.call(user1,'ME','Pune');
// greeting.call(user2,'BA','Akola');

// greeting.apply(user1,['ME','Pune']);
// greeting.apply(user2,['BA','Akola']);

let result=greeting.bind(user1,'ME');
result('Akola');

let result1=greeting.bind(user2,'BA');
result1('Pune');