const container = document.querySelector('.js-container');

container.addEventListener('click', function(event) {
  if (event.target.classList.contains('regresar')) {
    container.innerHTML = `
      <div class="half half-left"></div>
      <div class="half half-right"></div>
      <div class="titulo">¡Piedra, papel o tijeras!</div>
      <div class="imagenes">
        <img src="images/rock-emoji.png">
        <img src="images/paper-emoji.png">
        <img src="images/scissors-emoji.png">
      </div>
      <div class="botones">
        <button class="jugar js-one-player-button">Un jugador</button>
        <button class="jugar js-two-players-button">Dos jugadores</button>
      </div>
    `;
  }
});

container.addEventListener('click', function(event) {
  if (event.target.classList.contains('js-one-player-button')) {
    container.innerHTML = `
      <div class="half half-left"></div>
      <div class="half half-right"></div>
      <div class="titulo">Un jugador</div>
      <button class="jugar regresar">Regresar</button>
      <div class="config">
        <div class="config-rondas">
          <div>Número de rondas: </div>
          <select class="rondas">
            <option selected value="0" class="seleccion">Infinito</option>
            <option value="1" class="seleccion">1</option>
            <option value="2" class="seleccion">2</option>
            <option value="3" class="seleccion">3</option>
            <option value="4" class="seleccion">4</option>
            <option value="5" class="seleccion">5</option>
            <option value="6" class="seleccion">6</option>
            <option value="7" class="seleccion">7</option>
            <option value="8" class="seleccion">8</option>
            <option value="9" class="seleccion">9</option>
            <option value="10" class="seleccion">10</option>
            <option value="-1" class="seleccion">Personalizado</option>
          </select>
        </div>
        
        <div class="config-tiempo">
          <div>Tiempo:</div>
          <select class="tiempo">
            <option selected value="0" class="seleccion">3s</option>
            <option value="1" class="seleccion">4s</option>
            <option value="2" class="seleccion">5s</option>
            <option value="3" class="seleccion">6s</option>
            <option value="4" class="seleccion">7s</option>
            <option value="5" class="seleccion">8s</option>
            <option value="6" class="seleccion">9s</option>
            <option value="7" class="seleccion">10s</option>
            <option value="8" class="seleccion">Personalizado</option>
          </select>
        </div>
      </div>


      <button class="jugar jugar-ya">Jugar</button>

    `;
  }
});

container.addEventListener('click', function(event) {
  if (event.target.classList.contains('js-two-players-button')) {
    container.innerHTML = `
    <div class="half half-left"></div>
    <div class="half half-right"></div>
    <div class="titulo">Dos jugadores</div>
    <button class="jugar regresar">Regresar</button>
    <div class="config">
      <div class="config-rondas">
        <div>Número de rondas: </div>
        <select class="rondas">
          <option selected value="0" class="seleccion">Infinito</option>
          <option value="1" class="seleccion">1</option>
          <option value="2" class="seleccion">2</option>
          <option value="3" class="seleccion">3</option>
          <option value="4" class="seleccion">4</option>
          <option value="5" class="seleccion">5</option>
          <option value="6" class="seleccion">6</option>
          <option value="7" class="seleccion">7</option>
          <option value="8" class="seleccion">8</option>
          <option value="9" class="seleccion">9</option>
          <option value="10" class="seleccion">10</option>
          <option value="-1" class="seleccion">Personalizado</option>
        </select>
      </div>
      
      <div class="config-tiempo">
        <div>Tiempo:</div>
        <select class="tiempo">
          <option selected value="0" class="seleccion">3s</option>
          <option value="1" class="seleccion">4s</option>
          <option value="2" class="seleccion">5s</option>
          <option value="3" class="seleccion">6s</option>
          <option value="4" class="seleccion">7s</option>
          <option value="5" class="seleccion">8s</option>
          <option value="6" class="seleccion">9s</option>
          <option value="7" class="seleccion">10s</option>
          <option value="8" class="seleccion">Personalizado</option>
        </select>
      </div>
    </div>


    <button class="jugar jugar-ya">Jugar</button>

    `; 
  }
});

container.addEventListener('click', function(event) {
  if (event.target.classList.contains('jugar-ya')) {
    container.innerHTML = `
    <div class="half half-left"></div>
    <div class="middle"></div>
    <div class="half half-right"></div>
    `
    setTimeout(function() {
      document.querySelector('.half-left').classList.add('half-left-win');
      document.querySelector('.half-right').classList.add('half-right-lose');
    }, 3000);
  }
});




/* 
botonUnJugador.addEventListener('click', () => {
  container.innerHTML = `
    <div class="half half-left"></div>
    <div class="half half-right"></div>
    <div class="titulo">Un jugador</div>
    <button class="jugar regresar">Regresar</button>
  `;
});

botonDosJugadores.addEventListener('click', () => {
  container.innerHTML = `
    <div class="half half-left"></div>
    <div class="half half-right"></div>
    <div>3</div>
  `;
}); */
