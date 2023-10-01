const obj={
    name:'Vitthal',
    city:'Akola',
}


function displayUserInfo(state){
    console.log(`My name is ${this.name} living in ${this.city} in ${state}`);
}

Function.prototype.myApply=function(context,args){
    context.showMessage=this;
    context.showMessage(...args);
    delete context.showMessage;
}

displayUserInfo.myApply(obj,["Maharashtra"]);