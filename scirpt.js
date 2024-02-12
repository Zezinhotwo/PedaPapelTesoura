const escolhas = document.querySelectorAll("#opcao");
const pp = document.querySelectorAll("button")
const Result = document.getElementById("Result")

const partidas = 5;
let game = 1;

// "forEach" > vai percorrer o conteudo de "escolhas"
//e cada valor que for adicionado sera colocado em "button"
// Depois podera ser manipulado de acordo com o programador
escolhas.forEach(button => {

    button.addEventListener("click", () => {
        if (game <= partidas) {

            console.log(game);
            const computerSelection = getComputerChoice();
            const escolha = button.innerText;
            Result.innerHTML = (`Você jogou <Strong>${escolha}</Strong> contra <Strong>${computerSelection}</Strong>`)
            playRound(escolha, computerSelection)
            game++;
        }
        if(partidas < game){
           alert("Perdeu Mané")
        }
    });
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

function playRound(escolha, computerSelection) {
    if (escolha === computerSelection) {
        return "Empate";
    } else if (
        (escolha === "Papel" && computerSelection === "Pedra") ||
        (escolha === "Pedra" && computerSelection === "Tesoura") ||
        (escolha === "Tesoura" && computerSelection === "Papel")
    ) {

        return `${escolha} Ganha de ${computerSelection} `;
    } else if (
        (computerSelection === "Papel" && escolha === "Pedra") ||
        (computerSelection === "Pedra" && escolha === "Tesoura") ||
        (computerSelection === "Tesoura" && escolha === "Papel")
    ) {

        return `${escolha} Perde para ${computerSelection}`;
    }
}
// alert("cabo")












