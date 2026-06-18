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

function playRound(humanChoice, computerChoice, messageText) {
    humanChoice = humanChoice.toLowerCase();

    const route = humanChoice + "-" + computerChoice;

    if (humanChoice === computerChoice) {
        messageText.textContent = "That's a draw!";
        return 0;
    }
    if (routesMap.get(route)) {
        messageText.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        return 1;
    }
    messageText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    return -1;
}

function getScore(choice, gameScore, messageText) {
    const result = playRound(choice, getComputerChoice(), messageText);
    if (result === 1) {
        playerScore++;
        gameScore.textContent = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
    } else if (result === -1) {
        computerScore++;
        gameScore.textContent = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
    }
    countRound(gameScore);
}

function countRound(gameScore) {
    if (roundCounter === 5) {
        const gameButtons = document.querySelectorAll("button");
        gameButtons[0].remove();
        gameButtons[1].remove();
        gameButtons[2].remove();

        if (playerScore > computerScore) {
            gameScore.textContent = `You won the game with ${playerScore} points!`;
        } else if (computerScore > playerScore) {
            gameScore.textContent = `You lost the game with only ${playerScore} points!`;
        } else {
            gameScore.textContent = `Neither of you won the game. Player score: ${playerScore}, computer score: ${computerScore}`;
        }
    }
    roundCounter++;
}

function playGame() {
    // Make the references from the HTML file
    const btnContainer = document.querySelector(".buttonContainer");
    const scoreContainer = document.querySelector(".scoreContainer");
    const resultWindow = document.querySelector(".resultWindow");

    const gameScore = document.createElement("p");
    gameScore.textContent = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
    scoreContainer.appendChild(gameScore);

    const message = document.createElement("p");
    resultWindow.appendChild(message);

    const rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";
    const paperBtn = document.createElement("button");
    paperBtn.textContent = "Paper";
    const scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "Scissors";

    rockBtn.addEventListener("click", () => {
        getScore("rock", gameScore, message);
    });
    paperBtn.addEventListener("click", () => {
        getScore("paper", gameScore, message);
    });
    scissorsBtn.addEventListener("click", () => {
        getScore("scissors", gameScore, message);
    });

    btnContainer.appendChild(rockBtn);
    btnContainer.appendChild(paperBtn);
    btnContainer.appendChild(scissorsBtn);
}

// Map all possibilities of player round winning
const routesMap = new Map([ 
    ["scissors-paper",  1],
    ["rock-scissors",   1],
    ["paper-rock",      1]
]);

let playerScore = 0;
let computerScore = 0;
let roundCounter = 0;

playGame();