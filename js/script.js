function verTrabajos() {
    const botonTrabajo = document.getElementById('trabajos');
    botonTrabajo.addEventListener('click', 
    location.href = 'trabajos.html');
};

// Función para cambiar el color de fondo del encabezado cuando se hace clic en él
const header = document.querySelector('header');

header.addEventListener('click', function() {
 if (header.style.backgroundColor === '') {
  header.style.backgroundColor = 'Orange';
 } else {
  header.style.backgroundColor = '';
 }
});


function volverIndex() {
    const botonVolver = document.getElementById('volver');
    botonVolver.addEventListener('click', 
    location.href = 'index.html');
};

const botonDemo = document.getElementById('despliegue');
const menuDemos = document.querySelector('.demos');

botonDemo.addEventListener('click', () => {
  if (menuDemos.style.display === '') {
    menuDemos.style.display = 'block';
  } else {
    menuDemos.style.display = '';
  }
})

const botonDemo2 = document.getElementById('despliegue-2');
const menuDemos2 = document.querySelector('.demos-2');

botonDemo2.addEventListener('click', () => {
  if (menuDemos2.style.display === '') {
    menuDemos2.style.display = 'block';
  } else {
    menuDemos2.style.display = '';
  }
})


botonDemo.addEventListener('click', () => {
  if (menuDemos.classList.contains('show')) {
    menuDemos.classList.remove('show');
  } else {
    menuDemos.classList.add('show');
  }
});

const icon = document.querySelector('#chevron');

let isRotated = false;

icon.addEventListener('click', function() {

  if (isRotated) {

    icon.style.transform = "rotate(0deg)";

    isRotated = false;

  } else {

    icon.style.transform = "rotate(180deg)";

    isRotated = true;

  }

});





