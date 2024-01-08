let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

let rounds = 0;

/*
if (!score) {
  score = {
    wins: 0,
    losses: 0,
    ties: 0
  }
}
*/

let isAutoPlaying = false;
let intervalId; 

//const autoPlay = () => {

//}
function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}


function autoPlayText() {
  if (isAutoPlaying) {
    document.querySelector('.js-auto-play-button').innerHTML = 'Stop playing';
  } else {
    document.querySelector('.js-auto-play-button').innerHTML = 'Auto Play';
  }
}


document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'Backspace') {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    localStorage.removeItem('score');
    updateScoreElement();
  } else if (event.key === 'a') {
    autoPlay();
    autoPlayText();
  }
});

let result = '';
let computerResult = '';
let tuClase = '';
let tuEleccion = '';
let botClase = '';

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  if (playerMove === 'scissors') {
    tuEleccion = 'scissors-emoji.png';

    if (computerMove === 'rock') {
      result = 'You lose.';
      computerResult = 'You win.'
    } else if (computerMove === 'paper') {
      result = 'You win.';
      computerResult = 'You lose.'
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
      computerResult = 'Tie.'
    }

  } else if (playerMove === 'paper') {
    tuEleccion = 'paper-emoji.png';

    if (computerMove === 'rock') {
      result = 'You win.';
      computerResult = 'You lose.'
    } else if (computerMove === 'paper') {
      result = 'Tie.';
      computerResult = 'Tie.'
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
      computerResult = 'You win.'
    }
    
  } else if (playerMove === 'rock') {
    tuEleccion = 'rock-emoji.png';

    if (computerMove === 'rock') {
      result = 'Tie.';
      computerResult = 'Tie.'
    } else if (computerMove === 'paper') {
      result = 'You lose.';
      computerResult = 'You win.'
    } else if (computerMove === 'scissors') {
      result = 'You win.';
      computerResult = 'You lose.'
    }
  }

  if (result === 'You win.') {
    score.wins ++;
    tuClase = 'half-left-win';
    botClase = 'half-right-lose';
  } else if (result === 'You lose.') {
    score.losses ++;
    tuClase = 'half-left-lose';
    botClase = 'half-right-win';
  } else if (result === 'Tie.') {
    score.ties ++;
    tuClase = 'half-left-tie';
    botClase = 'half-right-tie';
  }

  localStorage.setItem('score', JSON.stringify(score));

  /* updateScoreElement();

  document.querySelector('.js-result').
    innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `
  You 
  <img src="images/${playerMove}-emoji.png" class="move-icon"> 
  <img src="images/${computerMove}-emoji.png" class="move-icon">
  Computer` */
  console.log(result);
}

/* function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
} */

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');

  // updateScoreElement();
}

let botEleccion = '';

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
    botEleccion = 'rock-emoji.png';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
    botEleccion = 'paper-emoji.png';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
    botEleccion = 'scissors-emoji.png';
  }

  return computerMove;
}
resetScore()
console.log(score)