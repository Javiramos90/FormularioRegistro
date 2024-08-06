function validarNombre() {
    let nombreTxt = document.getElementById("nombre").value;
    let nombreErrorTxt = document.getElementById("nombreError");
    let nombreRegex = new RegExp(`^[a-zA-Z0-9_]{6,20}$`);
    if (!nombreRegex.test(nombreTxt.trim())) {
        nombreErrorTxt.textContent = `El nombre debe tener contener de 6 a 20 caracteres.`;
        document.getElementById("nombre").classList.add(`error-input`);
        document.getElementById("nombre").classList.remove(`success`);
        return false;
    } else {
        nombreErrorTxt.textContent = ``;
        document.getElementById("nombre").classList.add(`success`);
        document.getElementById("nombre").classList.remove(`error-input`);
        return true;
    }
}

function validarEmail() {
    let esCorrecto = true;
    let emailTxt = document.getElementById("email").value;
    let emailErrorTxt = document.getElementById("emailError");
    let emailRegex = new RegExp('^(.+)@(\\S+)$');
    // (`[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}`);

    if (!emailRegex.test(emailTxt.trim())) {
        esCorrecto = false;
        emailErrorTxt.textContent = "Por favor, introduce un email válido.";
        document.getElementById("email").classList.add(`error-input`);
        document.getElementById("email").classList.remove(`success`);
    } else {
        emailErrorTxt.textContent = ``;
        document.getElementById("email").classList.add(`success`);
        document.getElementById("email").classList.remove(`error-input`);
        return esCorrecto;
    }
}

function validarfechaNacimiento() {
    let fechaNacimientoTxt = document.getElementById("fechaNacimiento").value;
    let fechaNacimientoErrorTxt = document.getElementById("fechaNacimientoError");
    let fechaActual = new Date();
    // let ageActual = fechaActual.getFullYear();
    // let mesActual = fechaActual.getMonth();
    // let diaActual = fechaActual.getDay();
    // let fechaMinima = new Date(ageActual - 120, mesActual, diaActual);
    let fechaMinima = new Date(
        fechaActual.getFullYear() - 120,
        fechaActual.getMonth(),
        fechaActual.getDay()
    );
    fechaNacimientoTxt = new Date(fechaNacimientoTxt);

    if (fechaNacimientoTxt > fechaActual || fechaNacimientoTxt < fechaMinima) {
        fechaNacimientoErrorTxt.textContent = "Por favor, introduce una fecha de nacimiento válida";
        document.getElementById("fechaNacimiento").classList.add(`error-input`);
        document.getElementById("fechaNacimiento").classList.remove(`success`);

    } else {
        fechaNacimientoErrorTxt.textContent = "";
        document.getElementById("fechaNacimiento").classList.add(`success`);
        document.getElementById("fechaNacimiento").classList.remove(`error-input`);

    }
}

function validarTlf() {
    let telefonoTxt = document.getElementById("tlf").value;
    let telefonoErrorTxt = document.getElementById("tlfError");
    let telefonoRegex = new RegExp('^[679]{1}[0-9]{8}$');

    if (!telefonoRegex.test(telefonoTxt.trim())) {
        telefonoErrorTxt.textContent = "Por favor, introduces un numero de telefono válido.";
        document.getElementById("tlf").classList.add(`error-input`);
        document.getElementById("tlf").classList.remove(`success`);

        return false;
    } else {
        telefonoErrorTxt.textContent = "";
        document.getElementById("tlf").classList.add(`success`);
        document.getElementById("tlf").classList.remove(`error-input`);
        return true;
    }
}

function validarPassword() {
    let passwordTxt = document.getElementById("password").value;
    let passwordErrorTxt = document.getElementById("passwordError");
    if (passwordTxt.trim().length < 6) {
        passwordErrorTxt.textContent = "La contraseña debe tener al menos 6 caracteres.";
        document.getElementById("password").classList.add(`error-input`);
        document.getElementById("password").classList.remove(`success`);
        return false;
    } else {
        passwordErrorTxt.textContent = "";
        document.getElementById("password").classList.add(`success`);
        document.getElementById("password").classList.remove(`error-input`);
        return true;
    }
}
function validarConfirmPassword() {
    let passwordTxt = document.getElementById("password").value;
    let confirmPasswordTxt = document.getElementById("confirmPassword").value;
    let confirmPasswordErrorTxt = document.getElementById("confirmPasswordError");

    if (passwordTxt.trim() !== confirmPasswordTxt.trim()) {
        confirmPasswordErrorTxt.textContent = "La contraseña no coinciden.";
        document.getElementById("confirmPassword").classList.add(`error-input`);
        document.getElementById("confirmPassword").classList.remove(`success`);
        return false;

    } else {
        confirmPasswordErrorTxt.textContent = "";
        document.getElementById("confirmPassword").classList.add(`success`);
        document.getElementById("confirmPassword").classList.remove(`error-input`);
        return true;
    }
}
// Agregar eventos de escucha para la validación en tiempo real
document.getElementById("nombre").addEventListener("input", validarNombre);
document.getElementById("email").addEventListener("input", validarEmail);
document.getElementById("fechaNacimiento").addEventListener("input", validarfechaNacimiento);
document.getElementById("tlf").addEventListener("input", validarTlf);
document.getElementById("password").addEventListener("input", validarPassword);
document.getElementById("confirmPassword").addEventListener("input", validarConfirmPassword);


// capturar evento submit
document.getElementById(`registroForm`).addEventListener(`submit`, function (event) {
    // esta función recibe un argumento de tipo event, event es un objeto con información sobre el evento este evento es de tipo submit

    // detiene el comportamiento del submit
    event.preventDefault();
    console.log("event:", event);
    // especifica el tipo de evento
    console.log(`Tipo de evento`, event.type);
    // contiene una referencia al DOM que dispara el evento
    console.log(`Elemento currentTarget`, event.currentTarget);
    console.log(`Elemento Target`, event.target);
    // tiempo en milisegundos en que ocurrio el evento
    console.log(`Tiempo de evento`, event.timeStamp);
    // un booleano que indica si el evento fue iniciado por un usuario (true) o por un script(false)

    console.log(`Es confiable`, event.isTrusted);

    let isNombreValid = validarNombre();
    let isEmailValid = validarEmail();
    let isfechaNacimientoValid = validarfechaNacimiento();
    let isTlfValid = validarTlf();
    let isPasswordValid = validarPassword();
    let isConfirmPasswordValid = validarConfirmPassword();

    if(isNombreValid && isEmailValid && isfechaNacimientoValid && isTlfValid && isPasswordValid && isConfirmPasswordValid) {
        alert(`Formulario enviado con éxito`);
        this.reset();
    }else{
        alert(`Por favor, corrige los errores del formulario`);
    }
})