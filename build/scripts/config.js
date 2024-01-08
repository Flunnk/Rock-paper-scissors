const defaultConfig = {
  language: 'es',
  rounds: 0,
  timer: 3
};

function initializeConfig() {
  // Verificar si las configuraciones ya existen en el almacenamiento local
  const storedConfig = JSON.parse(localStorage.getItem('config'));

  // Si no existen, guardar las configuraciones predeterminadas
  if (!storedConfig) {
    localStorage.setItem('config', JSON.stringify(defaultConfig));
  }
}

// Función para obtener las configuraciones actuales
function getConfig() {
  const storedConfig = JSON.parse(localStorage.getItem('config'));
  return storedConfig || defaultConfig; // Si no hay configuraciones guardadas, se utilizan las predeterminadas
}

// Función para aplicar las configuraciones en la página
function applyConfig() {
  const config = getConfig();

  // Ejemplo de cómo cambiar el idioma en la página
  if (config.language === 'en') {
    // Cambiar al idioma inglés
    // Código para cambiar el contenido de la página al inglés
  } else {
    // Mantener el idioma predeterminado (español)
    // Código para cambiar el contenido de la página al español o el idioma que sea predeterminado
  }

  if (config.rounds === -1) {
    // Código para mostrar el campo de texto para ingresar el número de rondas
  } else {
    // Código para mostrar el campo de selección de número de rondas
  }

  if (config.timer === -1) {
    // Código para mostrar el campo de texto para ingresar el valor del temporizador
  } else {
    // Código para mostrar el campo de selección de valor del temporizador
  }

  // Ejemplo de cómo utilizar el temporizador predeterminado
  const timerValue = config.timer;
  // Código para utilizar el valor del temporizador en la página
}

// Llamar a las funciones de inicialización y aplicación de configuraciones
initializeConfig();
applyConfig();

// Ejemplo de cómo cambiar la configuración del idioma
function changeLanguage(language) {
  const config = getConfig();
  config.language = language;
  localStorage.setItem('config', JSON.stringify(config));
  applyConfig(); // Aplicar los cambios en la página
}

// Ejemplo de cómo cambiar la configuración del temporizador
function changeTimer() {
  const config = getConfig();
  config.timer = count;
  localStorage.setItem('config', JSON.stringify(config));
}

console.log(getConfig());
console.log(`Rounds: ${rounds}`)
