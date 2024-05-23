const checkTerminos = document.getElementById("terminos");
const btnIniciar = document.getElementById("iniciar");
const btnRegistrar = document.getElementById("registrar");

checkTerminos.addEventListener("change", () => {
    if (checkTerminos.checked) { 
        btnRegistrar.removeAttribute("disabled");
    } else { 
        btnRegistrar.setAttribute("disabled", ""); 
    }
});

btnIniciar.addEventListener("click", () => {
    const usuario = document.getElementById("email").value; 
    const contrasena = document.getElementById("password").value; 

    if (usuario === "admin" && contrasena === "1234") {
        // Login exitoso 
        window.location.href = "dashboard.html";
    } else { 
        // Login fallido 
        alert("Intenta de nuevo !");
    }
});


const registerForm = document.getElementById('register-form'); // Obtener el formulario de registro

registerForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const name = document.getElementById('name').value;
    const emailRegister = document.getElementById('email-register').value;
    const passwordRegister = document.getElementById('password-register').value;

    // Verificar si alguno de los campos está vacío
    if (!name || !emailRegister || !passwordRegister) {
        alert('Por favor, complete todos los campos.');
        return;
    }

    window.location.href = "dashboard.html";
    
});
