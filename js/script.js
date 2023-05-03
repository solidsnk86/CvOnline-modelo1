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

const botonDemo = document.getElementById('despliegue');
const menuDemos = document.querySelector('.demos');

botonDemo.addEventListener('click', () => {
  if (menuDemos.style.display === 'none') {
    menuDemos.style.display = 'block';
  } else {
    menuDemos.style.display = 'none';
  }
})

const botonDemo2 = document.getElementById('despliegue-2');
const menuDemos2 = document.querySelector('.demos-2');

botonDemo2.addEventListener('click', () => {
  if (menuDemos2.style.display === 'none') {
    menuDemos2.style.display = 'block';
  } else {
    menuDemos2.style.display = 'none';
  }
})
