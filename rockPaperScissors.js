let computerSelection = "";
let playerSelection = "";
let computerWin = 0;
let playerWin = 0;

const buttons = document.querySelectorAll('button');
const playerScore = document.querySelector('#playerScore');
const computerScore = document.querySelector('#computerScore');
const output = document.querySelector('#output');

buttons.forEach(button => button.addEventListener('click', game));


// Call the game function to start the game.

//game();

// Function that plays a full set of game and after 5 rounds display the winner.
function game(e) {
   playRound(playerSelection = this.id);
   playerScore.textContent = `Player Score: ${playerWin}`;
   computerScore.textContent = `Computer Score: ${computerWin}`;
   if (playerWin === 5) {
      output.textContent = "You won the game, you are a beast! Score has been reseted!"
      computerWin = 0;
      playerWin = 0;
      playerScore.textContent = `Player Score: ${playerWin}`;
      computerScore.textContent = `Computer Score: ${computerWin}`;
   } else if (computerWin === 5){
      output.textContent = "You lose the game, what a shame!  Score has been reseted!"
      computerWin = 0;
      playerWin = 0;
      playerScore.textContent = `Player Score: ${playerWin}`;
      computerScore.textContent = `Computer Score: ${computerWin}`;
   }
}

// Function that plays one round of the game.
function playRound(playerSelection, computerSelection) {
   console.log(playerSelection);
   computerSelection = getComputerChoice();
   if (playerSelection === computerSelection) {
      output.textContent = "You are tied this round"
   } else if (playerSelection === "rock" && computerSelection === "paper") {
      computerWin++;
      output.textContent = "You lose, you choose Rock an the computer choose Paper!";
   } else if (playerSelection === "paper" && computerSelection === "scissors") {
      computerWin++;
      output.textContent = "You lose, you choose Paper an the computer choose Scissors!";
   } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerWin++;
      output.textContent = "You lose, you choose Scissors an the computer choose Rock!";
   } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerWin++;
      output.textContent = "You won, you choose Rock an the computer choose Scissors!";
   } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerWin++;
      output.textContent = "You won, you choose Paper an the computer choose Rock!";
   } else if (playerSelection === "scissors" && computerSelection === "paper") {
      playerWin++;
      output.textContent = "You won, you choose Scissors an the computer choose Paper!";
   }
}

// Generate a random computer's choice from the array of options and fill the variable "computerSelection" with it.
function getComputerChoice() {
   const choicesArray = ["rock", "paper", "scissors"];
   let randomNumber = Math.floor(Math.random() * choicesArray.length);
   return computerSelection = choicesArray[randomNumber];
}

// Get's the players choice from the input provided.
// function getPlayerChoice(e) {
//     playerInput = prompt("Please enter an option");
//     playerSelection = playerInput.toLowerCase();
//     return playerSelection;
// }

// function logText(e) {
//    console.log(this.id);
//    // e.stopPropagation(); // stop bubbling!
//    // console.log(this);
// }

