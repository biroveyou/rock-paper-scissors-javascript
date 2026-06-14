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
        return;
    }
    if (routesMap.get(route)) {
        console.log(`You won! ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        return;
    }
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return;
}

const routesMap = new Map([
    ["scissors-paper",  1],
    ["rock-scissors",   1],
    ["paper-rock",      1]
]);

let humanScore = 0;
let computerScore = 0;

playRound(getHumanChoice(), getComputerChoice());