function getRandomInt() {
    return Math.floor(Math.random() * (3 - 1 + 1) + 1)
}

function getComputerChoice() {
    let randomInt = getRandomInt()
    if (randomInt == 1) {
        return "rock";
    } else if (randomInt == 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

function getHumanChoice() {
    return prompt("Enter your choice - rock/paper/scissors : ")
}


