// seleção aleatório de (pedra papel ou tesoura)
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 100);
    if (randomNum <= 33) {
        return "Pedra";
    } else if (randomNum <= 66) {
        return "Tesoura";
    } else {
        return "Papel";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Empate";
    } else if (
        (playerSelection === "Papel" && computerSelection === "Pedra") ||
        (playerSelection === "Pedra" && computerSelection === "Tesoura") ||
        (playerSelection === "Tesoura" && computerSelection === "Papel")
    ) {
        return `${playerSelection} Ganha de ${computerSelection}`;
    } else {
        return `${playerSelection} Perde para ${computerSelection}`;
    }
}

const playerSelection = prompt("Digre Pedra Papel ou Tesoura");
console.log("Jogador:", playerSelection);
const computerSelection = getComputerChoice();
console.log("Computador:", computerSelection);
console.log(playRound(playerSelection, computerSelection));
