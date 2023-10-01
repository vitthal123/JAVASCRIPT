// async function getAllUser(){
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data)
//     } catch (error) {
//         console.log('ERR : Something went wrong');        
//     }
// }

// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data[0].name);
}).catch((err)=>{
    console.log('Error'+err)
})