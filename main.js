let bloco = document.querySelectorAll("td");
let jogada = "O";
let msg = document.querySelector("p");
let reset = document.querySelector("button");

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
        }

        // Lógica para verificar se houve ganhador
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
            msg.innerHTML = "<h1>Vitória!</h1>"
        }
    });
});

reset.addEventListener('click', event => {
    bloco.forEach(casa => {
        casa.innerText = "";
    });
});
