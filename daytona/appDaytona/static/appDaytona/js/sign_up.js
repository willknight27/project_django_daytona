//Acceder al formulario
const formulario = document.querySelector("#formulario");

//Acceder a los inputs
// la variable inputs es un arreglos con todos los inputs del formulario
const inputs = document.querySelectorAll("#formulario input")

const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{5,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{6,12}$/, // 6 a 12 caracteres.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //formato correo
}


const campos = {

    nombre: false,
    usuario: false,
    password: false,
    correo: false

}

const validarFormulario = (e) => {

    switch (e.target.name) {
        case "nombre":
            validarInput(expresiones.nombre,e.target, "nombre");
        break;

        case "usuario":
            validarInput(expresiones.usuario,e.target, "usuario");
        break;

        case "correo":
            validarInput(expresiones.correo,e.target, "correo");

        break;

        case "password":
            validarInput(expresiones.password,e.target, "password");
            validarPassword2()
        break;

        case "password2":
            validarPassword2()
        break;
    }
}



//Funcion para vaidar los campos
const validarInput = (expresion,input, campo) => {
    //comprobar expresion regular con la funcion test
    if (expresion.test(input.value)) {
        document.querySelector(`#grupo__${campo}`).classList.remove("formulario__grupo-incorrecto");
        document.querySelector(`#grupo__${campo}`).classList.add("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove("formulario__input-error-activo");
        campos[campo] = true;

    } else {
        //si el test del regex da falso -> agrega la clase de css de incorercto
        document.querySelector(`#grupo__${campo}`).classList.add("formulario__grupo-incorrecto");
        document.querySelector(`#grupo__${campo}`).classList.remove("formulario__grupo-correcto");
        document.querySelector(`#grupo__${campo} i`).classList.remove("fa-check-circle");
        document.querySelector(`#grupo__${campo} i`).classList.add("fa-times-circle");
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add("formulario__input-error-activo");
        campos[campo] = false;

    }
}

//Funcion de de validacion de contraseñas iguales
const validarPassword2 = () =>{

    let inputPasswod1 = document.querySelector("#password");
    let inputPasswod2 = document.querySelector("#password2");

    if (inputPasswod1.value !== inputPasswod2.value) {

        document.querySelector("#grupo__password2").classList.add("formulario__grupo-incorrecto");
        document.querySelector("#grupo__password2").classList.remove("formulario__grupo-correcto");
        document.querySelector("#grupo__password2 i").classList.remove("fa-check-circle");
        document.querySelector("#grupo__password2 i").classList.add("fa-times-circle");
        document.querySelector("#grupo__password2 .formulario__input-error").classList.add("formulario__input-error-activo");
        campos["password"] = false;
    }else{
        document.querySelector("#grupo__password2").classList.remove("formulario__grupo-incorrecto");
        document.querySelector("#grupo__password2").classList.add("formulario__grupo-correcto");
        document.querySelector("#grupo__password2 i").classList.add("fa-check-circle");
        document.querySelector("#grupo__password2 i").classList.remove("fa-times-circle");
        document.querySelector("#grupo__password2 .formulario__input-error").classList.remove("formulario__input-error-activo");
        campos["password"] = true;

    }


}

//comprobacion de validacion en cada input
//cada input tendra un evento keyup(escribir y soltar)
inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario); // blur -> hacer click fuera del input

});

//evento submit - formulario
formulario.addEventListener("submit", (e) => {

    e.preventDefault(); //evitar que recargue la pagina

    //validar si todos los input estan correctos
    const terminos = document.querySelector("#terminos")

    if (campos.usuario && campos.nombre && campos.password && campos.correo && terminos.checked) {
        formulario.reset();

        Swal.fire({
            icon: 'success',
            title: 'Usuario Registrado',
            
        });
        
        document.querySelectorAll(".formulario__grupo-correcto").forEach((icono)=>{

            icono.classList.remove("formulario__grupo-correcto");

        });
    

    }
    else if (campos.usuario && campos.nombre && campos.password && campos.correo) {
        Swal.fire({
            icon: 'info',
            title: 'Debes aceptar los terminos y condiciones',
            
        });
    }else{

        Swal.fire({
            icon: 'error',
            title: 'Debes rellenar los campos correctamente',
        });
    }
});