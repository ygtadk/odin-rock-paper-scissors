// function to generate a random number between 0 and 2
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// function to play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == 0 && computerSelection == 1) {
        return "You lose! Paper beats Rock";
    } else if (playerSelection == 0 && computerSelection == 2) {
        return "You win! Rock beats Scissors";
    } else if (playerSelection == 1 && computerSelection == 0) {
        return "You win! Paper beats Rock";
    } else if (playerSelection == 1 && computerSelection == 2) {
        return "You lose! Scissors beats Paper";
    } else if (playerSelection == 2 && computerSelection == 0) {
        return "You lose! Rock beats Scissors";
    } else if (playerSelection == 2 && computerSelection == 1) {
        return "You win! Scissors beats Paper";
    }
}

// function to play a game of rock paper scissors
function game() {
    let items = [
        [0, "Rock"],
        [1, "Paper"],
        [2, "Scissors"]
    ];
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt("Rock, Paper, or Scissors?");
        let computerSelection = getComputerChoice();
        if (playerSelection.toLowerCase() == items[0][1].toLowerCase()) {
            playerSelection = 0;
        } else if (playerSelection.toLowerCase() == items[1][1].toLowerCase()) {
            playerSelection = 1;
        } else if (playerSelection.toLowerCase() == items[2][1].toLowerCase()) {
            playerSelection = 2;
        } else if (playerSelection == null) {
            break;
        } else {
            console.log("### Invalid input!");
            i--;
            continue;
        }
        let result = playRound(playerSelection, computerSelection);
        console.log("- Round " + i + ":" + items[playerSelection][1] + " vs " + items[computerSelection][1]);
        console.log(result);
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    }
    console.log("# Player Score: " + playerScore + " | Computer Score: " + computerScore);
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}

console.log("Welcome to Rock Paper Scissors! Best of 5 rounds wins the game! Good luck!\n");

game();