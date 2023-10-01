class User{
    constructor(username,password,email){
        this.username=username;
        this.password=password;
        this.email=email;
    }
    encryptPassword(){
        console.log(`Encrypt password ${this.password}abc`);
    }
}

const u=new User('vitthal','123','manekarvithal@gmail.com')
console.log(u.encryptPassword());