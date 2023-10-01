let start=document.querySelector('#start');
let stop=document.querySelector('#stop');

let colorCode=function(){
    let hex='1234567890ABCDEF';
    let colCode='#';
    for(let i=0;i<6;i++){
        colCode+=hex[Math.floor(Math.random()*16)];
    }
    console.log(colCode);
    return colCode;
}
let timer;
let ChangeBG=function(){
    timer=setInterval(()=>{
    let color=colorCode();
    document.body.style.backgroundColor=color;    
    },1000)
}

start.addEventListener('click',ChangeBG);
let StopChangeBG=function(){
    clearInterval(timer);
}

stop.addEventListener('click',StopChangeBG);
