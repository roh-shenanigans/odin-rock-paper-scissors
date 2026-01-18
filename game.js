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


function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

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

playGame();
