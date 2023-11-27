'use strict';

let score = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  //if no number
  if (!guess) {
    displayMessage('⛔ No Number!');
  }
  //when guess is true
  else if (guess === secretNumber) {
    displayMessage('🎉 great! Correct Number!');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is false
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;

      displayMessage(guess > secretNumber ? '🦒 Too High!' : '📉 Too Low!');

      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣 You Lost The Game!');

      document.querySelector('.score').textContent = 0;
    }
  }
});

// document.querySelector('.again').addEventListener('click',()=>
//   location.reload()
// );

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
