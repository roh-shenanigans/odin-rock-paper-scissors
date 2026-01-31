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

/*
function getHumanChoice(event) {
    // let choice = prompt("Choose your move (rock/paper/scissors)");
    // return choice;
    console.log(event.target.getAttribute("id"));
    return event.target.getAttribute("id");
}
*/

function playRound(event) {
    const humanChoice = event.target.getAttribute("id");
    const computerChoice = getComputerChoice();

    // const scoreCard = document.querySelector("#score");
    updateScore();

    if (humanScore == 5 || computerScore == 5) {
        console.log("Game over!");
        displayResults();
        // console.log(`You: ${humanScore}  |  Computer: ${computerScore}`);

        // scoreCard.textContent = `You: ${humanScore}  |  Computer: ${computerScore}`;

        rockBtn.removeEventListener("click", playRound);
        paperBtn.removeEventListener("click", playRound);
        scissorsBtn.removeEventListener("click", playRound);

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

}

function updateScore() {
    const scoreCard = document.querySelector("#score");
    scoreCard.textContent = `You: ${humanScore}  |  Computer: ${computerScore}`;
}

function playGame() {
    let counter = 0;

    while (counter < 5) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        console.log(`Round ${counter + 1}: `)
        playRound(humanSelection, computerSelection);
        counter += 1;
    }

    if (humanScore > computerScore) {
        console.log("You win the overall game!");
        alert("You win the overall game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins the overall game!");
        alert("Computer wins the overall game!");
    } else {
        console.log("It is a draw!");
        alert("It is a draw!");
    }
}
