// rock, paper, scissor game functionality //

const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

function playGame(playerChoice) {
    // this will have the computer randomly choose between 0-2
    // 0 = rock, 1 = paper, 2 = scissors
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    let result = "";

    // catches if both player and computer chooses the same
    if(playerChoice === computerChoice) {
        result = "IT'S A TIE!";
    }
    else {
        // different cases for potential wins, player vs computer scenario using ternary operator
        switch(playerChoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }

    // update our displays with the choices and result
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    // resets result display so green or red wont be applied to a tie game
    resultDisplay.classList.remove("greenText", "redText");

    // switch case to change our win/lose text color
    switch(result) {
        case "YOU WIN!":
            resultDisplay.classList.add("greenText");
            break
        case "YOU LOSE!":
            resultDisplay.classList.add("redText");
            break
    }
}