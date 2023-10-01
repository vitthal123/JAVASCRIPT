let URL="https://jsonplaceholder.typicode.com/todos/1";
let promise=fetch(URL);
let d=promise.then(function(response){
    return response.json();
}).then(function(data){
    console.log({data});
}).catch(function(error){
    console.log("Error Occure",error)
})
console.log(d);