
var compScore = 0;
var userScore = 0;

do {
  var userChoice = userInput();
  var compChoice = compInput();
  score(userChoice, compChoice);
  alert("User Score: " + userScore + ", Computer Score: " + compScore);
} while (compScore < 5 && userScore < 5);

if(userScore === 5) {
  alert("Congratulations, you won the game!");
} else if (compScore === 5) {
  alert("Computer won the game");
}

function userInput() {
  var choice = prompt("Enter R to pick Rock, P for Paper and S for Scissors: ");
  return choice;
}

function compInput() {
  var number = Math.random();
  console.log(number);
  var compChoice;
  if (number < 1/3) {
    console.log("Rock");
    return "R";
  } else if (number < 2/3) {
    console.log("Paper");
    return "P";
  } else {
    console.log("Scissors");
    return "S";
  }
}

function score(userChoice, compChoice) {
  switch (userChoice) {
    case "R":
      switch (compChoice) {
        case "P":
          alert("Computer wins!");
          compScore++;
          break;
        case "S":
          alert("You win!");
          userScore++;
          break;
        default:
          alert("It's a draw!");
      }
      break;
    case "P":
      switch (compChoice) {
        case "S":
          alert("Computer wins!");
          compScore++;
          break;
        case "R":
          alert("You win!");
          userScore++;
          break;
        default:
          alert("It's a draw!");
      }
      break;
    case "S":
      switch (compChoice) {
        case "R":
          alert("Computer wins!");
          compScore++;
          break;
        case "P":
          alert("You win!");
          userScore++;
          break;
        default:
          alert("It's a draw!");
      }
      break;
  }
}
