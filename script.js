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
        endGame();
    } else if(computerScore == 5) {
        document.getElementById("end").textContent = "IA won the game !";
        endGame();
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

// Désactiver les boutons après que quelqu'un ait gagné et afficher "Rejouer"
function endGame() {
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;

    // Afficher le bouton "Rejouer"
    document.getElementById("replay").style.display = "inline";
}

// Fonction pour réinitialiser le jeu
function resetGame() {
    humanScore = 0;
    computerScore = 0;

    // Réinitialiser les textes
    document.getElementById("result").textContent = "";
    document.getElementById("end").textContent = "";
    document.getElementById("score").textContent = `Score: You 0 - IA 0`;

    // Réactiver les boutons
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;

    // Cacher le bouton "Rejouer"
    document.getElementById("replay").style.display = "none";
}

// Écouter le clic sur le bouton "Rejouer"
document.getElementById("replay").addEventListener("click", resetGame);