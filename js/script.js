function verTrabajos() {
    const botonTrabajo = document.getElementById('trabajos');
    botonTrabajo.addEventListener('click', 
    location.href = 'trabajos.html');
};

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

const icon2 = document.querySelector('#chevron-2');


icon2.addEventListener('click', function() {
  if (isRotated) {
    icon2.style.transform = "rotate(0deg)";
    isRotated = false;
  } else {
    icon2.style.transform = "rotate(180deg)";
    isRotated = true;
}
});

// Compartir en redes sociales

function compartirFacebook() {
  window.open('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(window.location.href));
};

function compartirWhatsapp() {
  var mensaje = "Mira mi Portfolio web aquí!: " + window.location.href;
  window.open('https://wa.me/?text=' + encodeURIComponent(mensaje));
};

function compartirTwitter() {
  window.open('https://twitter.com/share?url=' + encodeURIComponent(window.location.href));
};

function compartirLinkedIn() {
  var url = encodeURIComponent(window.location.href);
  var title = encodeURIComponent(document.title);
  var shareUrl = 'https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`';
  window.open(shareUrl, '_blank');
};
// Efecto botón 
const button = document.getElementById('miCV');

button.addEventListener('click', createWaterEffect);

function createWaterEffect(e) {
  const waterEffect = document.createElement('span');
  waterEffect.classList.add('water-effect');

  const rect = button.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  waterEffect.style.left = `${x}px`;
  waterEffect.style.top = `${y}px`;
    
  button.appendChild(waterEffect);
  // Iniciar la animación
  waterEffect.style.opacity = '1';
  waterEffect.style.backgroundSize = '100% 100%';

  // Eliminar el efecto después de cierto tiempo
  setTimeout(() => {
    button.removeChild(waterEffect);
  }, 1000);
}
