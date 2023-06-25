let userSrc = 0;
let compSrc = 0;
var userScore = document.getElementById("user-score");
var compScore = document.getElementById("comp-score");
var result = document.getElementById("report");
var rock = document.getElementById("rock");
var paper = document.getElementById("paper");
var scissor = document.getElementById("scissor");

function compChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convert(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissor";
}

function win(user, computer) {
  userSrc++;
  userScore.innerText = userSrc;
  result.innerText =
    convert(user) + " beats " + convert(computer) + ". You win! 🤩";
}

function lose(user, computer) {
  compSrc++;
  compScore.innerText = compSrc;
  result.innerText =
    convert(computer) + " beats " + convert(user) + ". You lost! 😥";
}

function draw(user, computer) {
  result.innerText =
    convert(user) + " and " + convert(computer) + ". It's a draw! 🙂";
}

function game(userChoice) {
  const computerChoices = compChoice();
  switch (userChoice + computerChoices) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoices);
      break;
    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoices);
      break;
    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoices);
      break;
  }
}

function main() {
  rock.addEventListener("click", function () {
    game("r");
  });

  paper.addEventListener("click", function () {
    game("p");
  });

  scissor.addEventListener("click", function () {
    game("s");
  });
}

main();
