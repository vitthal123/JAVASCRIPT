// const PromiseOne=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async Task 1');
//     },1000)
//     resolve()
// })

// PromiseOne.then(function(){
//     console.log('Promise consumed');
// })


// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async Task 2');
//     },1000)
//     resolve()
// }).then(function(){
//     console.log('Task 2 is Completed');
// })

// const promiseThree=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:'Vitthal',email:"manekarvithsl@gmail.com"})
//     },1000)
// })

// promiseThree.then(function(data){
//     console.log(data.username);
// })

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let err=false;
        if(!err){
            resolve({username:"Vitthal",email:"manekarvithal@gmail.com"})
        }else{
            reject('Erroe :Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user)
    return user.username
}).then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})