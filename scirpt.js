const escolhas = document.querySelectorAll("#opcao");
const Result = document.getElementById("Result")
const pontosP = document.getElementById("pontosP")
const pontosC = document.getElementById("pontosC")

const partidas = 5;
let game = 0;
let scorePlay = 0;
let scoreComp = 0;



// "forEach" > vai percorrer o conteudo de "escolhas"
//e cada valor que for adicionado sera colocado em "button"
// Depois podera ser manipulado de acordo com o programador
escolhas.forEach(button => {

    button.addEventListener("click", () => {
        if (partidas > game) {
            console.log(game);
            const computerSelection = getComputerChoice();
            const escolha = button.innerText;
            Result.innerHTML = playRound(escolha, computerSelection)
            // (`Você jogou <Strong>${escolha}</Strong> contra <Strong>${computerSelection}</Strong>`)

            game++;
        }
        if (game >= partidas) {
            if (scoreComp == scorePlay) {
                alert("Emapte!!")
            } else if (scoreComp >= scorePlay) {
                alert("TU PERDEU!!!")
            } else if (scorePlay >= scoreComp) {
                alert("TU GANHOU!!!")
            }
        }
        pontosP.innerText = scorePlay
        pontosC.innerText = scoreComp



        //console.log("pontuacao TU" + scorePlay);
        //console.log("pontuacao Comp" + scoreComp)
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

function playRound(escolha, computerSelection,) {
    if (escolha === computerSelection) {
        return `<Strong>${escolha}</Strong> Contra <Strong>${computerSelection}</Strong> = Empate`;
    } else if (
        (escolha === "Papel" && computerSelection === "Pedra") ||
        (escolha === "Pedra" && computerSelection === "Tesoura") ||
        (escolha === "Tesoura" && computerSelection === "Papel")
    ) {
        scorePlay++
        return `<Strong>${escolha}</Strong>  Ganha de <Strong>${computerSelection}</Strong>`;

    } else if (
        (computerSelection === "Papel" && escolha === "Pedra") ||
        (computerSelection === "Pedra" && escolha === "Tesoura") ||
        (computerSelection === "Tesoura" && escolha === "Papel")
    ) {
        scoreComp++
        return `<Strong>${escolha}</Strong> Perde para <Strong>${computerSelection}</Strong> `;
    }
}












