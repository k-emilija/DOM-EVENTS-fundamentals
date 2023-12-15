"use strict";

// CSS and game is not responsive; it only works on the desktop or tablet
// Guess a number between 1 and 20
// After each guess that we fail, the score decreases by one
// If number is correct, you get the highscore and screen turns green
// Highscore is being kept, you can press "Again" to play again and get new highscore

/////////////////////////////////
//
/////////////////////////////////
let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

//  Listening to an event - a click on a 'Check' button
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "❌ No Number!";

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🥳 Correct Number!";

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // when is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬆️ Too high";
      score--;
      document.querySelector(".score").innerText = score;
    } else {
      document.querySelector(".message").textContent =
        "🥲 You lost the game...";
      document.querySelector(".score").innerText = 0;
    }

    // when is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬇️ Too low";
      score--;
      document.querySelector(".score").innerText = score;
    } else {
      document.querySelector(".message").textContent =
        "🥲 You lost the game...";
      document.querySelector(".score").innerText = 0;
    }
  }
});
