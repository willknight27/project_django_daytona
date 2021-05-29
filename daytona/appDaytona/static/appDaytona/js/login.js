//Objeto expresiones regulares
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{5,16}$/, // Letras, numeros, guion y guion_bajo
    password: /^.{6,12}$/, // 4 a 12 caracteres.
}

const formulario = document.querySelector("#formulario_login");

const inputs = document.querySelectorAll("#formulario_login input");

const campos = {

    usuario: false,
    password: false
}

const validarForm = (e)=>{

    switch (e.target.name) {
        case "usuario":
            validarInput_Login(expresiones.usuario,e.target, "usuario");
        break;
    
        case "password":
            validarInput_Login(expresiones.usuario,e.target, "password");

        break;
    }
    
}

const validarInput_Login = (expresion,input, campo) => {
    //comprobar expresion regular con la funcion test
    if (expresion.test(input.value)) {
        document.querySelector(`#grupo__${campo}-login`).classList.remove("formulario__grupo-incorrecto-login");
        document.querySelector(`#grupo__${campo}-login`).classList.add("formulario__grupo-correcto-login");
        document.querySelector(`#grupo__${campo}-login i`).classList.add("fa-check-circle");
        document.querySelector(`#grupo__${campo}-login i`).classList.remove("fa-times-circle");
        document.querySelector(`#grupo__${campo}-login .formulario__input-error-login`).classList.remove("formulario__input-error-login-activo");
        campos[campo] = true;

    } else {
        //si el test del regex da falso -> agrega la clase de css de incorercto
        document.querySelector(`#grupo__${campo}-login`).classList.add("formulario__grupo-incorrecto-login");
        document.querySelector(`#grupo__${campo}-login`).classList.remove("formulario__grupo-correcto-login");
        document.querySelector(`#grupo__${campo}-login i`).classList.remove("fa-check-circle");
        document.querySelector(`#grupo__${campo}-login i`).classList.add("fa-times-circle");
        document.querySelector(`#grupo__${campo}-login .formulario__input-error-login`).classList.add("formulario__input-error-login-activo");
        campos[campo] = false;

    }
}




inputs.forEach( (input) =>{

    //comprobacion de campos y ejecucion de funcion validarLogin
    input.addEventListener("keyup", validarForm);
    input.addEventListener("blur", validarForm);


});


formulario.addEventListener("submit", (e)=>{
    
    e.preventDefault();


    if (campos.usuario && campos.password) {
        formulario.reset();

        Swal.fire({
            icon: 'success',
            title: '¡¡Bienvenido!!',
            
        });
        
        document.querySelectorAll(".formulario__grupo-correcto-login").forEach((icono)=>{

            icono.classList.remove("formulario__grupo-correcto-login");

        });
    

    }else{

        Swal.fire({
            icon: 'error',
            title: 'Debes rellenar los campos correctamente',
        });
    }
});


/*
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
*/ 