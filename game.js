let humanScore = 0;
let computerScore = 0;

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


function getHumanChoice() {
    let choice = prompt("Choose your move (rock/paper/scissors)");
    return choice;
}

// let msg = getHumanChoice();
// console.log(msg);

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice == computerChoice) {
        console.log("Draw!");
        return;
    }

    if (computerChoice == "rock") {
        if (humanChoice == "paper") {
            console.log("Human wins!");
            humanScore += 1;
        } else if (humanChoice == "scissors") {
            console.log("Computer wins");
            computerScore += 1;
        }

    } else if (computerChoice == "paper") {
        if (humanChoice == "rock") {
            console.log("Computer wins!");
            computerScore += 1;
        } else if (humanChoice == "scissors") {
            console.log("Human wins");
            humanScore += 1;
        }
    }

    else if (computerChoice == "scissors") {
        if (humanChoice == "rock") {
            console.log("Human wins");
            humanScore += 1;
        } else if (humanChoice == "paper") {
            console.log("Computer wins!");
            computerScore += 1;
        }
    }
}


// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// playRound(humanSelection, computerSelection);
