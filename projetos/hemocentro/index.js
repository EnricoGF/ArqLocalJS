// Definições básicas
let continuar = true
let index = 1
const dados = []

// Função para cadastro
function cadastrar() {
	let nomeUser = prompt("Qual o seu nome?").toUpperCase()
	let idadeUser = Number(prompt("Qual a sua idade?"))
	let pesoUser = Number(prompt("Qual o seu peso?"))
	let sangueUser = prompt("Qual o seu tipo sanguíneo?").toUpperCase()
	let doacaoUser = prompt("Quando foi sua última doação de sangue? DD/MM/AAAA")

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

	console.log("Dados inseridos com sucesso!")
	console.log("Nome:", objeto.nome, "||Idade:", objeto.idade, "||Peso:", objeto.peso, "||Tipo sanguíneo:", objeto.sangue, "||Última doação:", objeto.doacao)
}

// Função para listar dados
function listar() {
	console.log("----Função lista dados----")

	for (let dado of dados) {
		console.log("Nome:", dado.nome, "||Idade:", dado.idade, "||Peso:", dado.peso, "||Tipo sanguíneo:", dado.sangue, "||Última doação:", dado.doacao)
	}
}

// Função para buscar tipo sanguineo
function buscarTipo() {
	let tipoInserido = prompt("Por que tipo sanguíneo gostaria de procurar?").toUpperCase()

	console.log("----Função busca tipo sanguíneo----")

	for (let dado of dados) {
		if (dado.sangue == tipoInserido) {
			console.log("Nome:", dado.nome, "||Idade:", dado.idade, "||Peso:", dado.peso, "||Tipo sanguíneo:", dado.sangue, "||Última doação:", dado.doacao)
		}
	}
}

// Função para buscar
function buscarData() {
	let dataInserida = prompt("Por que ano gostaria de procurar?")

	console.log("----Função busca data----")

	for (let dado of dados) {
		if (dado.doacao.includes(dataInserida)) {
			console.log("Nome:", dado.nome, "//Idade:", dado.idade, "//Peso:", dado.peso, "//Tipo sanguíneo:", dado.sangue, "//Última doação:", dado.doacao)
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
	console.log("Opção inválida, tente novamente!")
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
