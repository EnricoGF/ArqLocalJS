/*
const filme =
{
    diretor: `Denis Villeneuve`,
    nome: `Duna`,
    lancamento: 2021,
    elenco: [`Zendaya`, `Timothée Chalamet`, `Rebecca Ferguson`],
    visto: true,
}

console.log(filme.diretor)
console.log(filme.nome)
console.log(filme.lancamento)
console.log(filme.elenco[0], filme.elenco[1], filme.elenco[2])
console.log(filme.visto)

///////////////////////////////////////

let perguntaNome = prompt("Qual o seu nome?")
let perguntaIdade = prompt("Qual a sua idade?")
let perguntaMusica = prompt("Qual seu gênero de música favorita?")

const user =
{
    nome: perguntaNome,
    idade: perguntaIdade,
    musica: perguntaMusica,
}

console.log (`O nome da pessoa é ${user.nome}, ela tem ${user.idade} anos e gosta muito de ${user.musica}`)

///////////////////////////////////////

const pessoa =
{
    nome: `José`,
    pet:
    {
        nome: `Jack`,
        raca: `Dalmata`,
        idade: `1`,
    }
}

console.log (`o nome da pessoa é ${pessoa.nome}, e tem um pet chamado ${pessoa.pet.nome}`)

////////////////////////////////////////

const users =
[{
    nome: `José`,
    idade: 51,
},{
    nome:`Maria`,
    idade: 49
}]

console.log(users[0].nome)
console.log(users[1].nome)

//////////////////////////////////////

const filme =
{
    diretor: `Denis Villeneuve`,
    nome: `Duna`,
    lancamento: 2021,
    elenco: [`Zendaya`, `Timothée Chalamet`, `Rebecca Ferguson`],
    visto: true,
}

console.log(filme.diretor)
console.log(filme.nome)
console.log(filme.lancamento)
console.log(filme.elenco[0], filme.elenco[1], filme.elenco[2])
console.log(filme.visto)

filme.personagens = [`Chani`, `Paul Atreides`, `Jessica Atreides`]

console.log(filme.elenco[0],`:`, filme.personagens[0],`\n`, filme.elenco[1],`:`, filme.personagens[1],`\n`, filme.elenco[2],`:`, filme.personagens[2])

filme.elenco[0] = `Xuxa`

console.log(filme)

*////////////////////////////////////

function recebe (objeto)
{
    const novoObj =
    {
        ...objeto,
        comida: [`Lasanha`, `Churrasco`, `Massas`],
        amigo:
        {
        nome: `Leo`,
        idade: 19,
        }
    }
    console.log (`O nome da pessoa é ${novoObj.nome} e suas comidas preferidas são ${novoObj.comida[0]}, ${novoObj.comida[1]} e ${novoObj.comida[2]}. Seu amigo se chama ${novoObj.amigo.nome} e tem ${novoObj.amigo.idade} anos`)
}

const pessoa1 =
{
    nome: `José`,
    idade: 17
}

const pessoa2 =
{
    nome: `Maria`,
    idade: 20
}

console.log(recebe(pessoa1))
console.log(recebe(pessoa2))
