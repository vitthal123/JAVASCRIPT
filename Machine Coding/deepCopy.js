const obj={
    name:'Vitthal',
    age:35,
    Address:{
        city:'Akola',
        state:'Maharashtra'
    }
}

function getcopyObject(source){
    const targetObj={};
    const keys=Object.keys(source);
    for(let key of keys){
        if(typeof source[key]==='object'){
            targetObj[key]=getcopyObject(source[key]);
        }
        else{
            targetObj[key]=source[key];
        }
    }
    return targetObj;
}

// const objectCopy={...obj};
const objectCopy=getcopyObject(obj);
objectCopy.name="Rajesh";
objectCopy.Address.city="Mumbai";
console.log(obj);
console.log(objectCopy);

