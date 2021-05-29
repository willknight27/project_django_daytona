document.querySelector("#formulario-contacto").addEventListener("submit", (e)=>{

    e.preventDefault();

    let nombre = document.querySelector("#nombre-txt").value;
    let correo = document.querySelector("#correo-txt").value;
    let mensaje = document.querySelector("#mensaje-txt").value;



    let flag = true;

    document.querySelector("#nombre-txt").classList.remove("is-invalid");
    document.querySelector("#correo-txt").classList.remove("is-invalid");
    document.querySelector("#mensaje-txt").classList.remove("is-invalid");

    if (nombre.trim() == "") {
        document.querySelector("#nombre-txt").classList.add("is-invalid");
        flag = false;
    }

    if (correo.trim() == "") {
        document.querySelector("#correo-txt").classList.add("is-invalid");
        flag = false;
    }

    if (mensaje.trim() == "") {
        document.querySelector("#mensaje-txt").classList.add("is-invalid");
        flag = false;
    }


    

    if (flag){


        Swal.fire({
            icon: 'success',
            title: 'Mensaje enviado',
            
        });
    }
    
    


});