let currentTime=document.querySelector(".para");
let buttonParent=document.querySelector(".btn-container")

let hours=0;
let minutes=0;
let seconds=0;
let timerID;

function displayTime(hours,minutes,seconds){
    currentTime.innerText=`${hours<10? `0${hours}`:hours}:${minutes<10 ?`0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}


function handleButtonClick(event){
    const button=event.target.name;
    if(button==='start'){
        timerID=setInterval(()=>{
            seconds++;
            if(seconds>58){
                seconds=0;
                minutes++;
            }
            if(minutes>58){
                minutes=0;
                hours++;
            }
            displayTime(hours,minutes,seconds);
        },10)
    }
    if(button==='stop'){
        clearInterval(timerID);
    }
    if(button==='reset'){
        clearInterval(timerID);
        seconds=minutes=hours=0;
        displayTime(hours,minutes,seconds);
    }
}

buttonParent.addEventListener("click",handleButtonClick);
