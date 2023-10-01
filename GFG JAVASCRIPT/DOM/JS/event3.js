let para=document.querySelector("#p");
let div=document.querySelector("#div");
let form=document.querySelector("#form");

form.addEventListener("click",()=>{
    alert("form");
})

div.addEventListener("click",()=>{
    alert("div");
})

para.addEventListener("click",()=>{
    alert("para");
})