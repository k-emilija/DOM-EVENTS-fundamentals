"use strict";

// CREATING A SECRET NUMBER AND A SCORE VALUE

let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

// HIGHSCORE

// The first score is always gonna be greater that the 0, and it will become the new highscore
let highscore = 0;

// Function for displaying a message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// IMPLEMENTING THE GAME LOGIC AND FUNCTIONALITY

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage("❌ No Number!");

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage("🥳 Correct Number!");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // HIGHSCORE
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when guess is different that the secret number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "⬆️ Too high" : "⬇️ Too low";

      displayMessage(guess > secretNumber ? "⬆️ Too high" : "⬇️ Too low");

      score--;
      document.querySelector(".score").innerText = score;

      // When player has no more guesses
    } else {
      displayMessage("🥲 You lost the game...");
      document.querySelector(".score").innerText = 0;
    }
  }
});

// RESTORE ALL THE INITIAL CONDITIONS WITH THE 'AGAIN!' BUTTON

document.querySelector(".again").addEventListener("click", function () {
  // Create a new secret number and reset the score
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reset the initial message, score inner text and number text back
  displayMessage("Start guessing...");
  document.querySelector(".score").innerText = score;
  document.querySelector(".number").textContent = "?";

  // Reset the input field to be empty
  // Empty string is an absence of a value
  document.querySelector(".guess").value = "";

  // Changing the style back
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
