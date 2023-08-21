document.addEventListener('DOMContentLoaded',()=>{
    let span=document.getElementById('data');
    let infoMostrar=localStorage.getItem('dataMostrar');
    span.innerHTML=infoMostrar;
})






