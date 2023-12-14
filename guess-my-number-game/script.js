"use strict";

// CSS and game is not responsive; it only works on the desktop or tablet
// Guess a number between 1 and 20
// After each guess that we fail, the score decreases by one
// If number is correct, you get the highscore and screen turns green
// Highscore is being kept, you can press "Again" to play again and get new highscore

/////////////////////////////////
//
/////////////////////////////////

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
document.querySelector(".number").textContent = secretNumber;

//  Listening to an event - a click on a 'Check' button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  if (!guess) {
    document.querySelector(".message").textContent = "❌ No Number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🥳 Correct Number!";
  }
});
