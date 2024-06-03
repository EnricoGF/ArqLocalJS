/*
function compara(num1, num2){
    if(num1>num2){
        console.log(`${num1} é maior que ${num2}`)
    }
    else if (num1<num2){
        console.log(`${num1} é menor que ${num2}`)
    }
    else{
        console.log(`${num1} é igual a ${num2}`)
    }
}

compara(5, 4)
compara(2, 2)

////////////////////////////////////////////////

let pais = prompt(`Qual o seu país de origem?`).toUpperCase()
switch(pais){
    case `BRASIL`:
        console.log(`Brasileiro`)
        break
    case `ARGENTINA`:
        console.log(`Argentino`)
        break
    case `URUGUAI`:
        console.log(`Uruguaio`)
        break
    default:
        console.log(`Nacionalidade não encontrada`)
}

///////////////////////////////////////////////

let pokemon = prompt(`Escolha um pokémon inicial, Charmander, Squitle e Bulbassaur`).toUpperCase()

switch(pokemon){
    case `CHARMANDER`:
        console.log(`Fogo`)
        break
    case `SQUIRTLE`:
        console.log(`Água`)
        break
    case `BULBASAUR`:
        console.log(`Planta e Veneno`)
        break
    default:
        console.log(`Pokémon inválido`)
}


//////////////////////////////////////////////

let casa = prompt(`Escolha uma casa de Hogwarts, Grifinoria, Sonserina, Corvinal ou LufaLufa`).toUpperCase()

switch(casa){
    case `GRIFINORIA`:
        console.log(`Você é da casa Grifinoria`)
        break
    case `SONSERINA`:
        console.log(`Você é da casa Sonserina`)
        break
    case `CORVINAL`:
        console.log(`Você é da casa Corvinal`)
        break
    case `LUFALUFA`:
        console.log(`Você é da casa LufaLufa`)
        break
    default:
        console.log(`Casa inválida`)
}
*/
///////////////////////////////////////////////

let ensino = prompt(`Você tem o ensino médio completo?`).toUpperCase()
let idade = Number(prompt(`Qual a sua idade?`))
let cursa = prompt(`Você está cursando outra faculdade no momento?`).toUpperCase()

if(idade>=18){
    idade = true
}
else{
    idade = false
}

if(ensino === `SIM`){
    ensino = true
}
else{
    ensino = false
}

if(cursa === `NAO`||`NÃO`){
    cursa === true
}
else{
    cursa=false
}


if(idade&&ensino&&cursa){
    console.log(`Você pode estudar em uma faculdade`)
}
else{
    console.log(`Você não pode estudar em uma faculdade`)
}