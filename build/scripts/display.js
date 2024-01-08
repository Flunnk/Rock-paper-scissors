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
            <option selected value="3" class="seleccion">3s</option>
            <option value="4" class="seleccion">4s</option>
            <option value="5" class="seleccion">5s</option>
            <option value="6" class="seleccion">6s</option>
            <option value="7" class="seleccion">7s</option>
            <option value="8" class="seleccion">8s</option>
            <option value="9" class="seleccion">9s</option>
            <option value="10" class="seleccion">10s</option>
            <option value="-1" class="seleccion">Personalizado</option>
          </select>
        </div>
      </div>


      <button class="jugar jugar-ya">Jugar</button>

    `;
  }
});

// Dos jugadores
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
          <option selected value="3" class="seleccion">3s</option>
          <option value="4" class="seleccion">4s</option>
          <option value="5" class="seleccion">5s</option>
          <option value="6" class="seleccion">6s</option>
          <option value="7" class="seleccion">7s</option>
          <option value="8" class="seleccion">8s</option>
          <option value="9" class="seleccion">9s</option>
          <option value="10" class="seleccion">10s</option>
          <option value="-1" class="seleccion">Personalizado</option>
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
      <div class="half half-right"></div>
      <div class="resultados"></div>
      <div class="countdown"></div>
      `
      const config = getConfig();
      count = config.timer;

      console.log(count);

      const countdownElement = document.querySelector('.countdown');

      function updateCountdown(count) {
        countdownElement.innerHTML = count;
      }

      function startCountdown() {
        let timer = setInterval(function() {
          if (count === 0) {
            clearInterval(timer);
            countdownElement.innerHTML = '';
          }
          updateCountdown(count);
          count--;
        }, 1000);
      }

      let newElement = document.createElement('div');
      newElement.classList.add('countdown');

      
      startCountdown();

      setTimeout(function() {
        document.querySelector('.half-left').classList.add(`${tuClase}`);
        document.querySelector('.half-right').classList.add(`${botClase}`);
        document.querySelector('.resultados').innerHTML = 
        `
          <button class="jugar regresar">Regresar</button>
          <div class="titulo">Resultados</div>
          <div class="resultado">
            <div class="resultados">Victorias: ${score.wins}</div>
            <div class="resultados">Derrotas: ${score.losses}</div>
            <div class="resultados">Empates: ${score.ties}</div>
          </div>
          <div class="tu-eleccion">
            <div>${result}</div>
            <img src="images/${tuEleccion}">
          </div>
          <div class="bot-eleccion">
            <div>${computerResult}</div>
            <img src="images/${botEleccion}">
          </div>
          <button class="jugar jugar-ya jugar-otra-vez">Jugar otra vez</button>

          `;

        if (countdownElement) {
          countdownElement.remove();
        }       
      }, count * 1000 + 1000);

      if (count > 0) {
        

      document.body.addEventListener('keydown', (event) => {
        if (event.key === 'q') {
          playGame('rock');
        } else if (event.key === 'w') {
          playGame('paper');
        } else if (event.key === 'e') {
          playGame('scissors');
        } else if (event.key === 'Backspace') {
          score.wins = 0;
          score.losses = 0;
          score.ties = 0;
          localStorage.removeItem('score');
          updateScoreElement();
        }
      });
    }
  }
  });

container.addEventListener('change', function(event) {
  if (event.target.classList.contains('tiempo')) {
    const tiempo = document.querySelector('.tiempo');
    const div = document.querySelector('.config-tiempo');
    count = tiempo.value;
    if (count === '-1') {
      div.innerHTML = `
      <div>Tiempo:</div>
      <input type="number" class="tiempo tiempo-personalizado" placeholder="Tiempo">
      `;
    } else {
      count = tiempo.value;
    }
    changeTimer();
    console.log(getConfig());
  };
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
