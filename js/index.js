document.addEventListener('DOMContentLoaded',function(){
    let btnGuardar=document.getElementById("buttonText");

    btnGuardar.addEventListener('click',function(){
        let info=document.getElementById("inputText");
        localStorage.setItem('dataMostrar',info.value);
    })

})

