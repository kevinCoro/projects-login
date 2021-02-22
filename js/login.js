document.addEventListener("DOMContentLoaded", function(event) {
    var form = document.getElementById("formLogin");
    // ANIMACIÓN
    setTimeout(()=>{
        form.style.transform = "translateX(0px)scale(1)";
        form.style.opacity = "1";
    },0);
});

// VALIDAR INPUT USERNAME
function usernameValid(){
    var response = document.getElementById("response");
    response.innerHTML = "";
    var input = document.getElementById("username");
    var hasErrorUsername = document.getElementById("hasErrorUsername");
    var errorUsername = document.getElementById("errorUsername");
    if(input.value.length == 0){
        hasErrorUsername.style.display = "block";
        errorUsername.style.display = "block";
    }else{
        hasErrorUsername.style.display = "none";
        errorUsername.style.display = "none";
    }
    validForm();
}

// VALIDAR INPUR PASSWORD
function passwordValid(){
    var response = document.getElementById("response");
    response.innerHTML = "";
    var input = document.getElementById("password");
    var hasErrorPassword = document.getElementById("hasErrorPassword");
    var errorPassword = document.getElementById("errorPassword");
    
    if(input.value.length == 0){
        hasErrorPassword.style.display = "block";
        errorPassword.style.display = "block";
    }else{
        hasErrorPassword.style.display = "none";
        errorPassword.style.display = "none";
    }
    validForm();
}

// VALIDAR FORMULARIO
function validForm(){
    usernameLength = document.getElementById("username").value.length;
    passwordLength = document.getElementById("password").value.length;
    var submit = document.getElementById("submit");
    if(usernameLength > 0 && passwordLength > 0){
        submit.removeAttribute("disabled");
    }else{
        submit.setAttribute("disabled",true);
    }
}

// ENVIAR FORMULARIO
function submitForm(){
    var response = document.getElementById("response");
    response.style.display = "block";
    if(usernameLength > 0 && passwordLength > 0){
        response.innerHTML = "Validando...";
        document.formLogin.method = "POST";
        document.formLogin.action = "http://URL";
        //document.formLogin.submit();
    }else{
        response.innerHTML = "Todos los campos son obligatorios";
    }
}

/*
    Desarrollador: Kevin Harrinson Lugo Díaz
    FACEBOOK: https://www.facebook.com/lugodiaz.kevin
    INSTAGRAM: https://www.instagram.com/kevinlugodev
    GITHUB: https://github.com/lugodiaz
*/