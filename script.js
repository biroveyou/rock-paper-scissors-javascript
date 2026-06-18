"use strict";

function getComputerChoice() {
    // Get a random number in a variable
    const randomNumber = Math.floor(Math.random() * 100);
    
    // Decide based on the random number what are the return values
    if (randomNumber < 33) {
        return "rock";
    } else if (randomNumber > 66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let userInput = prompt("Your turn! Choose rock, paper or scissors")
    return userInput;
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    const route = humanChoice + "-" + computerChoice;

    if (humanChoice === computerChoice) {
        console.log("That's a draw!");
        return 3;
    }
    if (routesMap.get(route)) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return 1;
    }
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return 2;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // for (let i = 0; i < 5; i++) {
    //     let winner = playRound(getHumanChoice(), getComputerChoice());
    //     if (winner === 1) {
    //         humanScore++;
    //     } else if (winner === 2) {
    //         computerScore++;
    //     }
    // }
    // if (humanScore > computerScore) {
    //     console.log(`You won the game! Total points: ${humanScore}`);
    // } else {
    //     console.log(`You lost the game! Total points: ${humanScore}`);
    // }
}

const routesMap = new Map([
    ["scissors-paper",  1],
    ["rock-scissors",   1],
    ["paper-rock",      1]
]);

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

rockBtn.addEventListener("click", playRound("rock", getComputerChoice));
paperBtn.addEventListener("click", playRound("paper", getComputerChoice));
scissorsBtn.addEventListener("click", playRound("scissors", getComputerChoice));
