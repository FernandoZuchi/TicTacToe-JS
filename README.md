# relogio

Explicação do código JS:

Vamos utilizar javascript DOM para manipular e criar lógica por trás de um jogo da velha em HTML, CSS

## Código HTML
```
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo da Velha - JS</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <div class="panel">
            <h1>Jogo da Velha</h1>
            <hr>
            <p>Primeiro a jogar: O</p>
            <table>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <button>Resetar</button>
        </div>
    </div>

    <script src="main.js"></script>
</body>
</html>
```

### Estilizando com CSS

```
/* Definições gerais */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; /* Define a fonte principal */
    background-color: #f9f9f9; /* Define a cor de fundo do corpo */
    margin: 0; /* Remove as margens padrão */
    padding: 0; /* Remove os preenchimentos padrão */
    display: flex; /* Usa o modelo de layout flexível */
    justify-content: center; /* Centraliza horizontalmente o conteúdo */
    align-items: center; /* Centraliza verticalmente o conteúdo */
    height: 100vh; /* Define a altura total da viewport */
}

/* Container principal */
.container {
    max-width: 600px; /* Define a largura máxima do container */
    width: 100%; /* Define a largura total do container */
}

/* Painel do jogo */
.panel {
    background-color: #fff; /* Cor de fundo do painel */
    border-radius: 20px; /* Bordas arredondadas */
    padding: 40px; /* Espaçamento interno */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); /* Sombra */
    animation: fadeIn 0.5s ease forwards; /* Animação de fade-in */
    text-align: center; /* Centraliza horizontalmente o conteúdo */
}

/* Animação de fade-in */
@keyframes fadeIn {
    from {
        opacity: 0; /* Inicia com opacidade 0 */
        transform: translateY(-20px); /* Translação para cima */
    }
    to {
        opacity: 1; /* Termina com opacidade 1 */
        transform: translateY(0); /* Sem translação */
    }
}

/* Estilo do título */
h1 {
    color: #333; /* Cor do texto */
    margin-bottom: 20px; /* Espaçamento inferior */
    font-weight: 600; /* Peso da fonte */
    font-size: 2.5em; /* Tamanho da fonte */
}

/* Estilo da tabela */
table {
    margin: 20px auto; /* Centraliza horizontalmente a tabela */
    border-collapse: collapse; /* Remove espaços entre as células */
}

/* Estilo das células da tabela */
td {
    width: 100px; /* Largura das células */
    height: 100px; /* Altura das células */
    border: 2px solid #333; /* Borda das células */
    font-size: 3em; /* Tamanho da fonte */
    text-align: center; /* Centraliza o texto */
    cursor: pointer; /* Mostra que as células são clicáveis */
    transition: all 0.3s ease; /* Transição suave */
}

/* Efeito de hover nas células */
td:hover {
    background-color: #e0e0e0; /* Cor de fundo ao passar o mouse */
    transform: scale(1.05); /* Aumenta ligeiramente o tamanho */
}

/* Estilo do texto */
p {
    font-size: 1.5em; /* Tamanho da fonte */
    color: #666; /* Cor do texto */
    margin-bottom: 30px; /* Espaçamento inferior */
}

/* Container do botão */
.button-container {
    text-align: center; /* Centraliza horizontalmente o botão */
    margin-top: 20px; /* Espaçamento superior */
}

/* Estilo do botão */
button {
    padding: 15px 30px; /* Espaçamento interno */
    font-size: 1.2em; /* Tamanho da fonte */
    background-color: #4CAF50; /* Cor de fundo */
    color: white; /* Cor do texto */
    border: none; /* Remove a borda */
    cursor: pointer; /* Mostra que o botão é clicável */
    border-radius: 10px; /* Bordas arredondadas */
    transition: background-color 0.3s ease; /* Transição suave */
}

/* Efeito de hover no botão */
button:hover {
    background-color: #45a049; /* Cor de fundo ao passar o mouse */
}

/* Estilização do plano de fundo */
.container::before {
    content: ''; /* Adiciona um conteúdo antes do container */
    position: absolute; /* Posição absoluta */
    top: 0; /* Alinhado ao topo */
    left: 0; /* Alinhado à esquerda */
    width: 100%; /* Largura total */
    height: 100%; /* Altura total */
    background-image: linear-gradient(to bottom right, #00c6ff, #0072ff); /* Gradiente de cores */
    opacity: 0.1; /* Opacidade */
    z-index: -1; /* Coloca atrás de todos os outros elementos */
    border-radius: 20px; /* Bordas arredondadas */
}
```

#### Desenvolvimento da lógica com JavaScript
```
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
        msg.innerText = `Próximo a jogar: ${jogada}`;
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
```
