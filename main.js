let bloco = document.querySelectorAll("td");
let msg = document.querySelector("p");
let reset = document.querySelector("button");
let jogada = "O";

// Lógica

bloco.forEach(casa => {
    casa.addEventListener('click', event => {
        // Lógica para realizar uma jogada
        if (casa.innerText == "")
        {
            casa.innerText = jogada;
            // Lógica para trocar a jogada
            jogada = jogada == "X" ? "O" : "X";
            // Atualizando a mensagem do próximo jogador
            msg.innerText = `Próximo a jogar: ${jogada}`;
            verificaGanhador();
        }
    });
});

reset.addEventListener('click', event => {
    bloco.forEach(casa => {
        casa.innerText = "";
    });
});

function verificaGanhador() {
    let empate = true; // Assume que há um empate

    if(
        // Conferindo as vitórias através de linhas primeiramente
        (bloco[0].innerText != "" && bloco[0].innerText == bloco[1].innerText && bloco[0].innerText == bloco[2].innerText) ||
        (bloco[3].innerText != "" && bloco[3].innerText == bloco[4].innerText && bloco[3].innerText == bloco[5].innerText) ||
        (bloco[6].innerText != "" && bloco[6].innerText == bloco[7].innerText && bloco[6].innerText == bloco[8].innerText) ||
        // Conferindo agora vitórias através das colunas
        (bloco[0].innerText != "" && bloco[0].innerText == bloco[3].innerText && bloco[0].innerText == bloco[6].innerText) ||
        (bloco[1].innerText != "" && bloco[1].innerText == bloco[4].innerText && bloco[1].innerText == bloco[7].innerText) ||
        (bloco[2].innerText != "" && bloco[2].innerText == bloco[5].innerText && bloco[2].innerText == bloco[8].innerText) ||
        // Para finalizar, vitórias na diagonal
        (bloco[0].innerText != "" && bloco[0].innerText == bloco[4].innerText && bloco[0].innerText == bloco[8].innerText) ||
        (bloco[2].innerText != "" && bloco[2].innerText == bloco[4].innerText && bloco[2].innerText == bloco[6].innerText)
    )
    {
        msg.innerHTML = "<h1>Vitória!</h1>";
        empate = false; // Se houve um vencedor, não há empate
    }

    // Verificando empate
    if (empate) {
        let todasPreenchidas = true;
        for (let i = 0; i < bloco.length; i++) {
            if (bloco[i].innerText === "") {
                todasPreenchidas = false;
                break;
            }
        }
        if (todasPreenchidas) {
            msg.innerHTML = "<h1>Empate!</h1>";
        }
    }
}
