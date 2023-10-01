let startButton=document.querySelector("#btn-start");
// console.log(startButton);

let CountButton=document.querySelector("#btn-count");

let stopButton=document.querySelector("#btn-stop")
console.log(stopButton);

stopButton.addEventListener("click",()=>{
    stopButton.classList.add("btn-red")
})

let value=0;

function increase_count(){
    value++;
    console.log(value);
}

CountButton.addEventListener("click",increase_count);


startButton.addEventListener("click",showMessage);

function showMessage(){
    if (startButton.innerText==="Start"){
        startButton.innerText="Begin";
    }else{
        startButton.innerText="Start";
    }
    }
    