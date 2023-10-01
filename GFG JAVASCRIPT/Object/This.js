// Using this keyword
let student={
    fname:'Vitthal',
    lname:'Manekar',
    degree:'ME',
    getFullName:function(){
        console.log('Welcome '+this.fname+' '+this.lname);
    }
}

student.getFullName();