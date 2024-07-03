////////////////////////////////////variáveis

console.log("texto") -> printa no console   \n -> shift enter

prompt("pergunta") -> pede resposta

	const nomeVariavel = prompt("texto") -> pede uma resposta e a resposta sera definida em nomeVariavel

const nomeVariavel = 10 -> declara variavel(fixa) 

let nomeVariavel = 10 -> declara variavel que pode ser alterada

typeof nomeVariavel -> mostra o tipo do valor (string/ number/ boolean/ undefined) da variavel

	nomeVariavel = Number(nomeVariavel) -> converte nomeVariavel em numero
		let nomeVariavel = Number(prompt("texto")) -> converte a resposta do prompt em numero
	nomeVariavel = nomeVarialvel.toString -> converte nomeVariavel em string
	
	const nomeVariavel2 = nomeVariavel.toString -> cria nomeVariavel2 e converte nomeVariavel em string
	const nomeVariavel2 = Number(nomeVariavel) -> cria nomeVariavel2 e converte nomeVariavel em numero

nomeVariavel = null -> valor nulo da variavel (precisa ser atribuido)

alert("olá "+ variavel) -> alerta de frase

//////////////////////////////////operadores lógicos

let soma = a + b -> soma a + b
let subtracao = a - b -> subtrai a - b
let multiplicacao = a * b -> multiplica a * b
let divisao = a / b -> divide a / b
let resto = a % b -> resto da divisão de a e b

a += b -> a = a + b
a -= b -> a = a - b
a *= b -> a = a * b
a /= b -> a = a / b
a %= b -> a = a % b


a++ -> incrementa 1 (a + 1)
a-- -> decrementa 1 (a - 1)

//////////////////////////////////comparadores -> resultados booleanos (true/false)

a == b -> igual (compara somente valor)
a === b -> estritamente igual (compara tipo e valor)
a!== b -> diferente //quando são diferentes = true
a > b -> maior
a >= b -> maior ou igual
a < b -> menor
a <= b -> menor ou igual

&& -> AND // true && true = resultado true
|| -> OR // true || false = resultado true
! -> NOT // !true = resultado false

////////////////////////////////strings

let string = `meu nome é ${variavel} e gosto da cor ${variavel2}`
// let string "meu nome é " + fulano + " é " + cor

const frase = "OieEeEee"
const fraseMinuscula = frase.toLowerCase() -> oieeeeee
const fraseMaiuscula = frase.toUpperCase() -> OIEEEEEE
const fraseTamanho = frase.length -> 8
const fraseSemEspaco = frase.trim() -> remove os espaços da frente e de tras da string: "   texto ".trim() = "texto"

const pesquisaOie = frase.includes("Oie") -> true //pesquisa dentro da string
const replaceOie = frase.replaceAll("Oie","tchau") -> tchauEeEee //troca o texto da string original para outro texto

console.log("Enrico".charAt(2)) // n

console.log("Enrico".indexOf(r)) // 3

///////////////////////////////arrays

const lista = ["item 0", 42, variavel, true]
const terceiroItem = lista[3] -> retorna variavel
const listaTamanho = lista.length -> tamanho da array
const item0 = lista.includes("item 0") -> true //pesquisa na array
lista.push("item 4") -> insere um novo elemento na array
const ultimoItem = lista.pop -> remove o ultimo elemento da array e salva em ultimoItem esse elemento
letras.splice(2, 1) -> vai até o elemento 2 e remove 1 elemento
	letras.splice(1, 1, "texto") -> vai até o elemento 1, remove 1 elemento e adiciona "texto" no lugar deste elemento removido

///////////////////////////////funções

function calculaArea(altura, largura) { // nome da função, com os parâmetros
	const area = altura * largura //código a ser executado
	console.log(area)

}
calculaArea(2, 3) //chamada da função, com argumentos

	////////////////////////RETURN
	return variavel -> retorna para função o valor atribuído à variável 

setTimeout // chama função depois de tempo definido

//////////////////////////////objeto

const professor = {
	nome: "Vitor",
	idade: 27,
	tarefas: ["Dar aula", "Responder dúvidas"],
	textoFuncao: function() {
		console.log ("texto")
	},
}
console.log (professor.idade)
professor.nome = "João" -> muda o valor de professor.nome
professor.pet = ->cria um novo objeto pet dentro do objeto professor
{
	nome: "Jack",
	raca: "Dalmata",
}
const novoObj = {
	chave: "valor",
	...professor,        -> spread de objeto, copia um outro objeto
	idade: 45            -> altera o valor de idade em novoObj
}


console.error(`Mensagem de erro`) // imprime mensagem de erro no sonsole
