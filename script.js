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

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    const route = humanChoice + "-" + computerChoice;

    if (humanChoice === computerChoice) {
        console.log("That's a draw!");
        return 0;
    }
    if (routesMap.get(route)) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
        return 1;
    }
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return -1;
}

function getScore(choice, gameScore) {
    const result = playRound(choice, getComputerChoice());
    if (result === 1) {
        playerScore++;
        gameScore.textContent = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
    } else if (result === -1) {
        computerScore++;
        gameScore.textContent = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
    }
    return result;
}

function playGame() {
    // Make the references of the HTML file
    const btnContainer = document.querySelector(".buttonContainer");
    const scoreContainer = document.querySelector(".scoreContainer");
    const resultWindow = document.querySelector(".resultWindow");

    const gameScore = document.createElement("p");
    gameScore.textContent = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
    scoreContainer.appendChild(gameScore);

    const rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";
    const paperBtn = document.createElement("button");
    paperBtn.textContent = "Paper";
    const scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "Scissors";

    rockBtn.addEventListener("click", () => {
        getScore("rock", gameScore);
    });
    paperBtn.addEventListener("click", () => {
        getScore("paper", gameScore)
    });
    scissorsBtn.addEventListener("click", () => {
        getScore("scissors", gameScore)
    });

    btnContainer.appendChild(rockBtn);
    btnContainer.appendChild(paperBtn);
    btnContainer.appendChild(scissorsBtn);

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

// Track the scores
let playerScore = 0;
let computerScore = 0;

playGame();