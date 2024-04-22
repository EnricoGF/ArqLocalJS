
/*let fulano = prompt("insira seu nome")
let cor = prompt("sua cor favorita")

let string = `a cor favorita de ${fulano} é ${cor}`
// let string "a cor favorita de " + fulano + " é " + cor

console.log(string)

//////////////////////////////////////////////////////////

let frase = prompt("insira uma frase")
const fraseMaiuscula = frase.toUpperCase()
const fraseTamanho = frase.length
const fraseReplace = fraseMaiuscula.replaceAll("O","I")

console.log("Frase original:", frase)
console.log("Frase em caixa alta:", fraseMaiuscula)
console.log("Tamanho da frase:",fraseTamanho)
console.log("Frase na língua do I:", fraseReplace)

///////////////////////////////////////////////////////////

const racas = ["poodle", "rottweiler", "doberman", "border collie", "dalmata"]

let posicao = prompt("insira um número de 0 a 4")

console.log(racas[posicao])
*/
const numeros = [1, 2, 3, 4, 5, 6]
console.log("Array:", numeros)

const tamanho = numeros.length
console.log("Tamanho da array:", tamanho)

numeros.push(7)

numeros.splice(3, 2)
console.log("Array final:", numeros)

let tamanhoNovo = numeros.length
console.log("Tamanho final da Array:", tamanhoNovo)