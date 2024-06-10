// Definições básicas
let continuar = true
let index = 1
const dados = []

// Função para cadastro
function cadastrar() { //pronto
	let nomeUser = prompt(`Qual o seu nome?`).toUpperCase()
	let idadeUser = Number(prompt(`Qual a sua idade?`))
	let pesoUser = Number(prompt(`Qual o seu peso?`))
	let sangueUser = prompt(`Qual o seu tipo sanguíneo?`).toUpperCase()
	let doacaoUser = prompt(`Quando foi sua última doação de sangue? DD/MM/AAAA`)

	let objeto = {
		index: index,
		nome: nomeUser,
		idade: idadeUser,
		peso: pesoUser,
		sangue: sangueUser,
		doacao: doacaoUser
	}

	dados.push(objeto)
	index++
}

// Função para listar
function listar() {
	for (let dado of dados) {
		console.log("Nome:", dado.nome, "\nIdade:", dado.idade, "\nPeso:", dado.peso, "\nTipo sanguíneo:", dado.sangue, "\nÚltima doação:", dado.doacao)
	}
}

// Função para buscar tipo sanguineo
function buscarTipo() {
	let tipoInserido = prompt("Por que tipo sanguíneo gostaria de procurar?").toUpperCase()

	for (let dado of dados) {
		if (dado.sangue == tipoInserido) {
			console.log("Nome:", dado.nome, "\nIdade:", dado.idade, "\nPeso:", dado.peso, "\nTipo sanguíneo:", dado.sangue, "\nÚltima doação:", dado.doacao)
		}
	}
}

// Função para buscar
function buscarData() {
	let dataInserida = prompt("Por que data gostaria de procurar?")
	
	for (let dado of dados) {
		if (dado.doacao == dataInserida) {
				console.log("Nome:", dado.nome, "\nIdade:", dado.idade, "\nPeso:", dado.peso, "\nTipo sanguíneo:", dado.sangue, "\nÚltima doação:", dado.doacao)
			}
	}
	
}

// Função para sair
function sair() {
	continuar = false
	console.log("Tchau! Para reiniciar, atualize a aba do navegador.")
}

//Função de resposta inválida
function invalido() {
	console.log(`Opção inválida, tente novamente!`)
}

// Loop para perguntar ao usuário
while (continuar) {
	// Formatar pergunta
	let pergunta  = "===== SISTEMA DE CADASTRO DE DOADORES DE SANGUE =====\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Cadastrar doador\n"
		pergunta += "2. Listar doadores\n"
		pergunta += "3. Buscar doador por tipo sanguíneo\n"
		pergunta += "4. Buscar doador por data da última doação\n"
		pergunta += "0. Sair"

	// Guardar resposta
	let resposta = Number(prompt(pergunta))

	// Identificar resposta e chamar função
	switch (resposta) {
		case 1:
			cadastrar()
			break
		case 2:
			listar()
			break
		case 3:
			buscarTipo()
			break
		case 4:
			buscarData()
			break
		case 0:
			sair()
			break
		default:
			invalido()
	}
}
