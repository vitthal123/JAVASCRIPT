class User{
    constructor(username){
        this.username=username;
    }
    logMe(){
        console.log(`The username is : ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email=email;
        this.password=password;
    }

    addEmail(){
        console.log(`The Email is : ${this.email}`);
    }
}

const t=new Teacher('Vitthal','manekarvithal@gmail','123');
console.log(t.addEmail());
console.log(t.logMe());
console.log(t);

const p=new User('Vitthal');
console.log(p.logMe());