let inputF=document.querySelector(".input");
// console.log(inputF);

// inputF.addEventListener("change",()=>{
//     console.log(inputF.value);
// })


// inputF.addEventListener("focus",()=>{
//     console.log(inputF.value);
// })


inputF.addEventListener("mousedown",(event)=>{
    let x_cor=event.pageX;
    let y_cor=event.pageY;
    let cor=`x cor -${x_cor} and y cor -${y_cor}`
    console.log(cor);
})
