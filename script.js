let humanScore = 0;
let computerScore = 0;

// Fonction pour récupérer la valeur du bouton cliqué et jouer un round
function getHumanChoice(event) {
    const humanChoice = event.target.value;
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);

    // Afficher le résultat du round
    document.getElementById("result").textContent =
        `You chose ${humanChoice}, IA chose ${computerChoice}.`;

    // Mettre le score à jour
    document.getElementById("score").textContent =
        `Score: You ${humanScore} - IA ${computerScore}`;

    // Vérifier si il y a un vainqueur
    if(humanScore == 5) {
        document.getElementById("end").textContent = "You won the game !";
    } else if(computerScore == 5) {
        document.getElementById("end").textContent = "IA won the game !";
    }
}

// écoute les clicks
document.getElementById("rock").addEventListener("click", getHumanChoice);
document.getElementById("paper").addEventListener("click", getHumanChoice);
document.getElementById("scissors").addEventListener("click", getHumanChoice);

// choix de l'ordinateur
function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let number = Math.floor(Math.random() * 3);
    let computerChoice = options[number];
    return computerChoice;
}

// Jouer un round
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