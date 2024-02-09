const Pedra = document.getElementById("Pedra");
const Papel = document.getElementById("Papel");
const Tesoura = document.getElementById("Tesoura");
const Result = document.getElementById("Result")

let partidas = 0;
Pedra.addEventListener("click", () => {
    partidas++;
    const computerSelection = getComputerChoice();
    const playerSelection = Pedra.innerText;
    playRound(playerSelection, computerSelection);
    Result.innerHTML = (`Você jogou <Strong>${playerSelection}</Strong> contra <Strong>${computerSelection}</Strong>`)
    console.log(partidas)
    if (partidas == 5) {
        console.log(partidas)
        alert("cabo")
    }
});
Papel.addEventListener("click", () => {
    partidas++;
    const computerSelection = getComputerChoice();
    const playerSelection = Papel.innerText;
    playRound(playerSelection, computerSelection);
    Result.innerHTML = (`Você jogou <Strong>${playerSelection}</Strong> contra <Strong>${computerSelection}</Strong>`)
    console.log(partidas)
    if (partidas == 5) {
        console.log(partidas)
        alert("cabo")
    }
});
Tesoura.addEventListener("click", () => {
    partidas++;
    const computerSelection = getComputerChoice();
    const playerSelection = Tesoura.innerText;
    playRound(playerSelection, computerSelection);
    Result.innerHTML = (`Você jogou <Strong>${playerSelection}</Strong> contra <Strong>${computerSelection}</Strong>`)
    if (partidas == 5) {
        console.log(partidas)
        alert("cabo")
    }
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
// alert("cabo")












