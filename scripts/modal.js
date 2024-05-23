const modal = document.getElementById("myModal");
const closeButton = document.getElementsByClassName("close")[0];

// Mostrar el modal cuando la página se cargue
window.onload = function() {
    modal.style.display = "block";

    // Cerrar el modal después de 5 segundos
    setTimeout(function() {
        modal.style.display = "none";
    }, 5000);
}
closeButton.onclick = function() {
    modal.style.display = "none";
}
