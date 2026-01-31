let humanScore = 0;
let computerScore = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorsBtn.addEventListener("click", playRound);


function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);

    if (choice == 0) {
        return "rock";
    } else if (choice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(event) {
    const humanChoice = event.target.getAttribute("id");
    const computerChoice = getComputerChoice();

    // const scoreCard = document.querySelector("#score");
    updateScore();

    if (humanScore == 5 || computerScore == 5) {
        displayResults();
        return;
    }

    if (humanChoice == computerChoice) {
        console.log("Draw!");
        return;
    }

    if (computerChoice == "rock") {
        if (humanChoice == "paper") {
            console.log("You win!");
            humanScore += 1;
        } else if (humanChoice == "scissors") {
            console.log("Computer wins!");
            computerScore += 1;
        }

    } else if (computerChoice == "paper") {
        if (humanChoice == "rock") {
            console.log("Computer wins!");
            computerScore += 1;
        } else if (humanChoice == "scissors") {
            console.log("You win!");
            humanScore += 1;
        }
    }

    else if (computerChoice == "scissors") {
        if (humanChoice == "rock") {
            console.log("You win!");
            humanScore += 1;
        } else if (humanChoice == "paper") {
            console.log("Computer wins!");
            computerScore += 1;
        }
    }
}

function displayResults() {
    console.log("Game over!");
    const result = (humanScore > computerScore) ? "You win!" : "Computer wins!";
    let results = document.querySelector("#results");
    results.textContent = `Game over! ${result}`;

    if (result === "You win!") {
        results.style.backgroundColor = "lime";
        results.style.color = "white";
    } else {
        results.style.backgroundColor = "red";
        results.style.color = "white";
    }

    results.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";

    rockBtn.removeEventListener("click", playRound);
    paperBtn.removeEventListener("click", playRound);
    scissorsBtn.removeEventListener("click", playRound);
}

function updateScore() {
    const scoreCard = document.querySelector("#score");
    scoreCard.textContent = `You: ${humanScore}  |  Computer: ${computerScore}`;
}
