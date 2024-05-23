function FechaHoy() {
    const hoy = new Date();
    const diasSemana = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const diaSemana = diasSemana[hoy.getDay()];
    const diaMes = hoy.getDate();
    const mes = hoy.getMonth() + 1;
    const anio = hoy.getFullYear();
    const fechaFormateada = `${diaMes}/${mes}/${anio}`;


    const elementoFecha = document.getElementById('fechaHoy');
    if (elementoFecha) {
        elementoFecha.textContent = `Hoy es ${diaSemana}, ${fechaFormateada}`;
    } else {
        console.log('No hay elemento con id "fechaHoy"');
    }
}


window.onload = FechaHoy;
