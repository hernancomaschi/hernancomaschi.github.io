'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Coorect Number!';

// let score = 20;
// let highscore = 0;
// let secretNumber = Math.trunc(Math.random() * 20) + 1;

// const displayMessage = function (message) {
//   document.querySelector('.message').textContent = message;
// };

// document.querySelector('.again').addEventListener('click', function () {
//   highscore = score;
//   score = 20;
//   secretNumber = Math.trunc(Math.random() * 20) + 1;
//   //   document.querySelector('.message').textContent = 'Start guessing...';
//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = score;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
//   document.querySelector('body').style.backgroundColor = '#222';
//   document.querySelector('.number').style.width = '15rem';

//   console.log(secretNumber);
//   //   location.reload();
// });

// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   //   console.log(guess, typeof guess);

//   // when there is not input
//   if (!guess) {
//     displayMessage('⛔ No Number!');
//     // document.querySelector('.message').textContent = '⛔ No Number!';
//     // when Player wins
//   } else if (guess === secretNumber) {
//     document.querySelector('.number').textContent = secretNumber;
//     // document.querySelector('.message').textContent = '🥇 Correct Number!';
//     displayMessage('🥇 Correct Number!');
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     if (score > highscore) {
//       highscore = score;
//       document.querySelector('.highscore').textContent = highscore;
//     }
//     // when guess is different
//   } else if (guess !== secretNumber) {
//     if (score > 1) {
//       //   document.querySelector('.message').textContent =
//       //     guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
//       displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
//       score--;
//       document.querySelector('.score').textContent = score;
//     } else {
//       //   document.querySelector('.message').textContent = '😥 You lost the game!';
//       displayMessage('😥 You lost the game!');
//       document.querySelector('.score').textContent = 0;
//     }
//   }
//   //     // when guess is too low
//   //   } else if (guess < secretNumber) {
//   //     if (score > 1) {
//   //       document.querySelector('.message').textContent = '📉 Too low!';
//   //       score--;
//   //       document.querySelector('.score').textContent = score;
//   //     } else {
//   //       document.querySelector('.message').textContent = '😥 You lost the game!';
//   //       document.querySelector('.score').textContent = 0;
//   //     }
//   //     // when guess is too high
//   //   } else if (guess > secretNumber) {
//   //     if (score > 1) {
//   //       document.querySelector('.message').textContent = '📈 Too high!';
//   //       score--;
//   //       document.querySelector('.score').textContent = score;
//   //     } else {
//   //       document.querySelector('.message').textContent = '😥 You lost the game!';
//   //       document.querySelector('.score').textContent = 0;
//   // }
//   //   }
// });

let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.again').addEventListener('click', function () {
  highscore = score;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // when there is not input
  if (!guess) {
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('🥇 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // when guess is different
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('😥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
