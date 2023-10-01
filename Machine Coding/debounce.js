let inp=document.querySelector(".input");
let out=document.querySelector("#para")

function Debounce(event){
    console.log(event.target.value)
    out.innerText=event.target.value;
    // event.target.value
}

function handleDebounceHandler(callback,delay){
    let timerID;
    return function(...args){
        clearTimeout(timerID);
        timerID=setTimeout(()=>{
            callback(...args);
            
        },delay)
    }
}

let EventDebounce=handleDebounceHandler(Debounce,500);
inp.addEventListener("keyup",EventDebounce);


