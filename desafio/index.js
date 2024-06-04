/*
Nome completo:
Tipo de jogo: IN indica internacional; e DO indica doméstico;
Etapa do jogo: SF indica semi-final; DT indica decisão de terceiro lugar; e FI indica final;
Categoria: pode ser as opções 1, 2, 3 ou 4;
Quantidade de ingressos.
*/

const tabelaValores = {
    SF: [ 1320, 880, 550, 220 ],
    DT: [ 660, 440, 330, 170 ],
    FI: [ 1980, 1320, 880, 330 ]
}

//dados solicitados do usuario
const nomeUser = prompt(`Nome completo:`)
const tipoJogo = prompt(`Selecione o tipo de jogo entre IN para internacional e DO para doméstico`).toUpperCase()
const etapaJogo = prompt(`Selecione a etapa do jogo entre SF para Semi-final, DT para Decisão de Terceiro lugar e FI para Final`).toUpperCase()
const categoria = Number(prompt(`Selecione a categoria entre 1, 2, 3 ou 4`)) - 1
const ingressoUser = Number(prompt(`Selecione a quantidade de ingressos`))
let ingressoValor

if(tipoJogo===`DO`){
    ingressoValor = tabelaValores[etapaJogo][categoria]
}
else if(tipoJogo===`IN`){
    ingressoValor = tabelaValores[etapaJogo][categoria]/5
}

let valorTotal = ingressoUser*ingressoValor

//função printa informações no console
function printInfo (){
    console.log(`---Dados da compra---\n
    Nome do cliente: ${nomeUser}\n
    Tipo do jogo: ${tipoJogo}\n
    Etapa do jogo: ${etapaJogo}\n
    Categoria: ${categoria}\n
    Quantidade de Ingressos: ${ingressosUser}\n
    ---Valores---\n
    Valor do ingresso:  R$ 1.980\n
    Valor total: ${valorTotal}`)
}

printInfo()