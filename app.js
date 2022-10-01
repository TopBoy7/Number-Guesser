/*
GAME FUNCTION
-Player must guess a number between a min and max
-Player gets a certain amount  of guesses
-Notify player of guesses remaining
-Notify the player of the correct answer if loose
-let player choose to play again
*/


//Game values
let min = 1,
    max = 10,
    winningNum = getWinningNum(min, max),
    guessesLeft = 3;

//UI Element
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener
game.addEventListener('mousedown', function(e) {
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
});

//listen for guess
guessBtn.addEventListener('click', function() {
  let guess = parseInt(guessInput.value);

  //Validate
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  //Check if won
  if(guess === winningNum) {
    gameOver(true, `${winningNum} is correct!, YOU WIN!`);
  } else {
    //wrong number
    guessesLeft -= 1;

    if(guessesLeft === 0) {
      //Game over - lost
      gameOver(false, `${winningNum} is correct number, YOU LOSE!`);

    } else {
      //Game continues - answer wrong

      //Change border color
    guessInput.style.borderColor = 'red';

    //clear input
    guessInput.value = ''

    //message
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red'); 
    }
  }
});



//Game over
function gameOver(won, msg) {
  let color;
  won === true ? color = 'green' : 'red'

  //Disable input
  guessInput.disabled = true;
  //Change border color
  guessInput.style.borderColor = color;

  //text color
  message.style.color = color;
  //set message
  setMessage(msg); 

  //play again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again'
}

//Get winning number
function getWinningNum(min, max) {
  return Math.floor(Math.random()*(max-min+1));
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}




















