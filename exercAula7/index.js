/*
let numero1 = Number(prompt("Insira o primeiro número"))
let numero2 = Number(prompt("Insira o segundo número"))

console.log("igual", numero1 === numero2)
console.log("diferente", numero1 !== numero2)
console.log("maior", numero1>numero2)
console.log("maior igual", numero1>=numero2)
console.log("menor", numero1<numero2)
console.log("menor igual", numero1<=numero2)


console.log("soma", numero1 + numero2)
console.log("subtracao", numero1 - numero2)
console.log("multiplicacao", numero1 * numero2)
console.log("divisao", numero1 / numero2)
console.log("resto", numero1 % numero2)

///////////////////////////////////////////////////////////////////// OPERACOES AND
let a = true
let b = false
let c = true

console.log(a && b) // false

console.log(b && c) // false

console.log(a && c) // true

console.log(a && b && c) //false
//////////////////////////////////////////////////////////////////// OPERACOES OR
let a = true
let b = false
let c = true

console.log(a || b) //true

console.log(b || c) //true

console.log(a || c) //true

console.log(a || b || c) //true
*/

//////////////////////////////////////////////////////////////////// exercicio: fazer um programa que receba o nome, ano de nascimento
//de uma pessoa e o ano atual e mostre: o nome, a idade, true ou false se é maior de idade, quantos anos terá em 2050

let nome = prompt("Digite seu nome") // pergunta o nome
console.log("Nome:", nome) // printa o nome

let nascimento = Number(prompt("Qual seu ano de nascimento?")) // ano que nasceu e converte em numero
let atual = Number(prompt("Qual o ano atual?")) // ano atual e converte em numero
idade = atual-nascimento // calculando a idade
console.log("Idade:", idade) // printa a idade

let maior = idade>=18 // verifica se é maior de idade
console.log("É maior de idade?", maior) // printa resultado se é ou não maior de idade

let diferenca =  2050-atual // calcula a diferença do ano atual e 2050
let futuro = idade + diferenca // calcula quantos anos terá em 2050
console.log("Idade em 2050:", futuro) // printa quantos terá em 2050