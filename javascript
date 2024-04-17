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

{
let a = 10
let b = 10

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

//comparadores -> resultados booleanos (true/false)
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


}
