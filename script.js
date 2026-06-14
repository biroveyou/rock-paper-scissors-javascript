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
    const humanChoice = prompt("Your turn! Choose rock, paper or scissors (lowercase only)")
    return humanChoice;
}

console.log(getHumanChoice());