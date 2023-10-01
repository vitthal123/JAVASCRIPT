const obj={
    name:'Vitthal',
    city:'Akola',
}


function displayUserInfo(state){
    console.log(`My name is ${this.name} living in ${this.city} in ${state}`);
}

Function.prototype.myCall=function(context,...args){
    console.log(context);
    console.log(this);
}

displayUserInfo.call(obj,'Maharashtra');
console.log(obj)