// Seleccionamos el botón y el cuerpo de la página
const toggleButtonDark = document.getElementById('toggle-theme-dark');
const toggleButtonLight = document.getElementById('toggle-theme-light');

const light = document.querySelector('.fa-sun');
const dark = document.querySelector('.fa-moon');
const body = document.body;

// Función para alternar entre el modo claro y oscuro
function toggleTheme() {
  // Comprobamos el tema actual
  if (body.classList.contains('light-mode')) {
    // Cambiar a modo oscuro
    body.classList.replace('light-mode', 'dark-mode');
    localStorage.setItem('theme', 'dark');

    light.style.display = 'none';
    dark.style.display = 'block';
  } else {
    // Cambiar a modo claro
    body.classList.replace('dark-mode', 'light-mode');
    localStorage.setItem('theme', 'light');

    light.style.display = 'block';
    dark.style.display = 'none';
  }
}

// Comprobamos si hay una preferencia guardada en el localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.replace('light-mode', 'dark-mode');
  light.style.display = 'none';
  dark.style.display = 'block';
} else {
  body.classList.replace('dark-mode', 'light-mode');
  light.style.display = 'block';
  dark.style.display = 'none';
}

// Añadimos el evento para alternar el tema cuando el usuario haga clic en el botón
toggleButtonDark.addEventListener('click', toggleTheme);
toggleButtonLight.addEventListener('click', toggleTheme);
