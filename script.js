function getRandomInt() {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1);
}

function getComputerChoice() {
    let randomInt = getRandomInt();
    if (randomInt == 1) {
        return "rock";
    } else if (randomInt == 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter your choice - rock/paper/scissors : ");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice == computerChoice) {
        console.log("It's a tie");
    } else if (humanChoice == "rock") {
        if (computerChoice == "paper") {
            computerScore += 1;
            console.log("You lose! Paper beats Rock")
        } else {
            humanScore += 1;
            console.log("You win! Rock beats Scissors")
        }
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") {
            computerScore += 1;
            console.log("You lose! Scissors beats Paper")
        } else {
            humanScore += 1;
            console.log("You win! Paper beats Rock")
        }
    } else if (humanChoice == "scissors") {
        if (computerChoice == "rock") {
            computerScore += 1;
            console.log("You lose! Rock beats Scissors")
        } else {
            humanScore += 1;
            console.log("You win! Scissors beats Paper")
        }
    } else {
        console.log("It's an invalid choice!");
    }
}

