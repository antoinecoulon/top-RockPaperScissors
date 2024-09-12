
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let number = Math.floor(Math.random() * 3);
    let computerChoice = options[number];
    return computerChoice;
}

function getHumanChoice() {
    let humanInput = prompt();
    let humanChoice = humanInput.toLowerCase();
    return humanChoice;
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        const outcomes = {
            rock: 'scissors',
            scissors: 'paper',
            paper: 'rock'
        };
        
        if (humanChoice === computerChoice) {
            return "It's a tie!";
        } else if (outcomes[humanChoice] === computerChoice) {
            humanScore++;
            return "You win!";
        } else {
            computerScore++;
            return "Computer wins!";
        }

    }

    for (let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        
        let result = playRound(humanSelection, computerSelection);
        console.log(result);
        console.log("Human score is " + humanScore + " and Computer score is " + computerScore);
    }
    let winner;
    if (humanScore > computerScore) {
        console.log("You are the WINNER !!!!");
    } else {
        console.log("Computer beats you... Try again!");
}
}

playGame();
