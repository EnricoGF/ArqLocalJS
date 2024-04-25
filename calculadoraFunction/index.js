let n1 = Number(prompt("NUMERO 1"))
let n2 = Number(prompt("NUMERO 2"))

function soma(){
    let soma = n1+n2
    return soma
}

function subtrai(){
    let subtrai = n1-n2
    return subtrai
}

function multiplica(){
    let multiplica = n1*n2
    return multiplica
}

function divide(){
    let divide = n1/n2
    return divide
}

let operacao = prompt("OPERACAO")

if(operacao=="soma"){
    console.log(soma())
}

if(operacao=="subtrai"){
    console.log(subtrai())
}

if(operacao=="multiplica"){
    console.log(multiplica())
}

if(operacao=="divide"){
    console.log(divide())
}