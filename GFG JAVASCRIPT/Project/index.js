let btnAdd=document.querySelector(".button");
let todoInput=document.querySelector(".input");
let todo;
let todoList=[];
let showTodo=document.querySelector(".todo-container")

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0;
        let v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

btnAdd.addEventListener("click",(e)=>{
    e.preventDefault();
    todo=todoInput.value;
    if(todo.length>0){
        todoList.push({id:uuid(),todo,isCompleted:false})
    }
    
    // console.log(todoList);
    renderTodoList(todoList);
})


function renderTodoList(todoList){
    showTodo.innerHTML=todoList.map(({id,todo,isCompleted})=>`<div><input type="checkbox"> <label for="Item-${id}" class="todo">${todo}</label><button>Delete</button></div>`)
}

// id="Item-${id}" 