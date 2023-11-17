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
// Jogo comparação de escolhas do Usuário

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Empate";
    } else if (
        (playerSelection === "Papel" && computerSelection === "Pedra") ||
        (playerSelection === "Pedra" && computerSelection === "Tesoura") ||
        (playerSelection === "Tesoura" && computerSelection === "Papel")
    ) {

        return `${playerSelection} Ganha de ${computerSelection}`;
    } else if (
        (computerSelection === "Papel" && playerSelection === "Pedra") ||
        (computerSelection === "Pedra" && playerSelection === "Tesoura") ||
        (computerSelection === "Tesoura" && computerSelection === "Papel")
    ) {

        return `${playerSelection} Perde para ${computerSelection}`;
    }
}
//contagem de rodadas e Resultado
function game() {
    let count = 0; // Inicializa a contagem
    while (count < 4) {
        const playerSelection = prompt("Digre Pedra Papel ou Tesoura");
        const computerSelection = getComputerChoice();
        console.log("Jogador:", playerSelection);
        console.log("Computador:", computerSelection);
        console.log(playRound(playerSelection, computerSelection, count));
        count++;
    }
}

const playerSelection = prompt("Digre Pedra Papel ou Tesoura");
const computerSelection = getComputerChoice();
console.log("Jogador:", playerSelection);
console.log("Computador:", computerSelection);
console.log(playRound(playerSelection, computerSelection));
console.log(game());