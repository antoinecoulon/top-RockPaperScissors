
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let number = Math.floor(Math.random() * 3);
    let computerChoice = options[number];
    return computerChoice;
}

let computerChoice = getComputerChoice();
console.log(computerChoice);

function getHumanChoice() {
    let humanChoice = prompt();
    return humanChoice;
}

let humanChoice = getHumanChoice();
console.log(humanChoice);
