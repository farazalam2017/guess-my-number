"use strict";
/* 
console.log(document.querySelector(".message").textContent); // Select class and then display its content
document.querySelector(".message").textContent = "Correct Number";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23; // To write in input elements by js engine not manually
console.log(document.querySelector(".guess").value);
 */

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no number
  if (!guess) {
    displayMessage("⛔ No Number!");

    // When player wins (background-color = backgroundColor(camel case))
  } else if (guess === secretNumber) {
    displayMessage("🍾 Correct Number");
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347"; // Change the style of body tag

    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }

    // When guess is too high
  } else if (guess != secretNumber) {
    if (score > 1)
      displayMessage(guess > secretNumber ? "👆 Too high!" : "👇 Too Low!");
    score--;
    document.querySelector(".score").textContent = score;
  } else {
    displayMessage(" 😭 You lost the game");
    document.querySelector(".score").textContent = 0;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start Guessing....";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
