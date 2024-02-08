const Pedra = document.getElementById("Pedra");
const Papel = document.getElementById("Papel");
const Tesoura = document.getElementById("Tesoura");
const Result = document.getElementById("Result")


Pedra.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = Pedra.innerText;
    playRound(playerSelection, computerSelection);
    console.log("Jogador:", playerSelection);
    console.log("Computador:", computerSelection);
    Result=document.writeln(`Você jogou <Strong>${playerSelection}</Strong> contra <Strong>${computerSelection}</Strong>`)
});
Papel.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = Papel.innerText;
    playRound(playerSelection, computerSelection);
    console.log("Jogador:", playerSelection);
    console.log("Computador:", computerSelection);
    Result=document.writeln(`Você jogou <Strong>${playerSelection}</Strong> contra <Strong>${computerSelection}</Strong>`)
});

Tesoura.addEventListener("click", () => {
    const computerSelection = getComputerChoice();
    const playerSelection = Tesoura.innerText;
    playRound(playerSelection, computerSelection);
    console.log("Jogador:", playerSelection);
    console.log("Computador:", computerSelection);
    Result=document.writeln(`Você jogou <Strong>${playerSelection}</Strong> contra <Strong>${computerSelection}</Strong>`)
});


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
    } else if (
        (computerSelection === "Papel" && playerSelection === "Pedra") ||
        (computerSelection === "Pedra" && playerSelection === "Tesoura") ||
        (computerSelection === "Tesoura" && computerSelection === "Papel")
    ) {

        return `${playerSelection} Perde para ${computerSelection}`;
    }
}









