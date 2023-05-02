function verTrabajos() {
    const botonTrabajo = document.getElementById('trabajos');
    botonTrabajo.addEventListener('click', 
    window.open('trabajos.html'));
};

// Función para cambiar el color de fondo del encabezado cuando se hace clic en él
const header = document.querySelector('header');

header.addEventListener('click', function() {
  header.style.backgroundColor = 'rgb(228, 101, 55)';
});

function volverIndex() {
    const botonVolver = document.getElementById('volver');
    botonVolver.addEventListener('click', 
    window.open('index.html'));
};