/**
 * creating common method which will apply to All Objects
 */

// creating common method
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`The truelength of ${this.trim().length}`);
}

let myName='Vitthal   ';
myName.trueLength();

"Ram   ".trueLength();