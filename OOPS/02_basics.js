const heroPower={
    thor:'hitpower',
    spiderman:'sling',
    printMe:function()
    {
        console.log(`The power ${this.thor}`);
    }
}

let myHeros=['thor','spiderman']

console.log(heroPower.printMe());

Object.prototype.getMesg=function(){
    console.log(`we all printing message`);
}

console.log(heroPower.getMesg());
console.log(myHeros.getMesg());