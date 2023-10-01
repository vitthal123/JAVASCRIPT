/**
 * call methods
 * 
 */

// function setUsername(username)
// {
//     this.username=username;
//     console.log('Called');
// }

// function createUser(username,email,password)
// {
//     setUsername(username);
//     this.email=email;
//     this.password=password;
// }

// const obj=new createUser('Vitthal','manekarvithal@gmail.com','12345678')
// console.log(obj);

//-------------------------------------------------------------------------------------------------

function setUsername(username)
{
    this.username=username;
    console.log('Called');
}

function createUser(username,email,password)
{
    setUsername.call(this,username);
    this.email=email;
    this.password=password;
}

const obj=new createUser('Vitthal','manekarvithal@gmail.com','12345678')
console.log(obj);