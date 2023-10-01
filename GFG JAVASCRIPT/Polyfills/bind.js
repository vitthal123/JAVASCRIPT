const obj={
    name:'vitthal',
    city:'Akola',
}

function displayUserInfo(state){
    console.log(`Hi I am ${this.name} from ${this.city} ,${state}`);
}

Function.prototype.myBind=function(context,...args){
    context.wrapperFunc=this;
    return function(...rest){
        context.wrapperFunc(...args,...rest);
        delete context.wrapperFunc;
    }
}

const bindFunc=displayUserInfo.myBind(obj);
bindFunc("maharashtra");