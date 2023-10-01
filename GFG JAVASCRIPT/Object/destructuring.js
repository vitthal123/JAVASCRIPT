// Unpacking the element
let Obj={
    name:'vitthal',
    address:{
        state:'MH',
        city:'Mumbai',
        locality:'Santacruz'
    },
    courses:['html','css','reactjs','angularjs']
}

let {address:{state,city,locality}}=Obj;
console.log(city,state,locality);