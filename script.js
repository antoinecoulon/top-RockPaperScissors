let computerChoice;

function getComputerChoice() {
    randomNumber = Math.random();
    console.log(randomNumber);

    if (randomNumber <= 0,33) {
        computerChoice = "Rock";
    } else if (randomNumber > 0,33 && randomNumber <= 0,66) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }

    return computerChoice;
    console.log(computerChoice);

    // Retourne toujours Rock !!!
}

