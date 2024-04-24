/*
function nomes(nome){
    console.log(`Olá, ${nome}`)
}
nomes("rafael")
nomes("gabriel")
nomes("enrico")

//////////////////////////////////////////

function calcula(n1, n2){
    let soma = n1 + n2
    return soma
}

let resultado = calcula(1, 1)
console.log(resultado)


///////////////////////////////////////// pega 1 e ultimo numeros de uma array, divide eles por 2 e cria uma nova com esses numeros



function PrimUlti(numeros){

    let primeiro = numeros[0]
    let ultimo = numeros[numeros.length - 1]

    primeiro = primeiro/2
    ultimo = ultimo/2

    let novaLista = [primeiro, ultimo]

    return novaLista
}

let lista1 = [ 20, 52, 36, 14 ]
let lista2 = [ 28, 30, 12, 72 ]
let lista3 = [ 80, 64, 92, 78 ]

console.log(PrimUlti(lista1))
console.log(PrimUlti(lista2))
console.log(PrimUlti(lista3))

////////////////////////////////////// expressões de função

const nomes = function(nome){
    console.log(nome)
}
nomes("enrico")

const soma = function(n1, n2){
    console.log(n1+n2)
}

soma(1, 2)

*/
/////////////////arrow function

const nomes = (nome) =>{
    console.log(nome)
}
nomes("enrico")

const soma = (n1, n2) =>{
    console.log(n1+n2)
}

soma(1, 2)
