document.addEventListener('DOMContentLoaded',()=>{
    let span=document.getElementById('data');
    let infoMostrar=JSON.stringify(localStorage.getItem('dataMostrar'));
    span.innerHTML=infoMostrar;
})






