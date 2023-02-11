
let clock=document.querySelector('#clock')



function dispTime(){
    clock.textContent=new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',second:'2-digit' });
}

setInterval(dispTime,1000);