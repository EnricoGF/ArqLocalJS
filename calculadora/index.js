let numero1 = Number(prompt("Insira o primeiro número"))
let numero2 = Number(prompt("Insira o segundo número"))

let operador = prompt("Selecione o operador:\nsoma\nsubtracao\nmultiplicacao\ndivisao")

if(operador=="soma"){
    console.log("A soma de", numero1, "e", numero2, "é", numero1 + numero2)
}

if(operador=="subtracao"){
    console.log("A subtração de", numero1, "e", numero2, "é", numero1 - numero2)
}

if(operador=="multiplicacao"){
    console.log("A multiplicação de", numero1, "e", numero2, "é", numero1 * numero2)
}

if(operador=="divisao"){
    console.log("A divisão de", numero1, "e", numero2, "é", numero1 / numero2)
}
