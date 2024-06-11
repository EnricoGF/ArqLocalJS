// Definições básicas
let continuar = true
const dados = []
let index = 0

// Função para cadastro
function cadastrar() {
	let nomeUser = prompt("Qual o seu nome?").toUpperCase()
	let idadeUser = Number(prompt("Qual a sua idade?"))
	let pesoUser = Number(prompt("Qual o seu peso?"))
	let sangueUser = prompt("Qual o seu tipo sanguíneo?").toUpperCase()
	let doacaoUser = prompt("Quando foi sua última doação de sangue? DD/MM/AAAA")
	index++

	let objeto = {
		index: index,
		nome: nomeUser,
		idade: idadeUser,
		peso: pesoUser,
		sangue: sangueUser,
		doacao: doacaoUser
	}
	dados.push(objeto)

	console.log("----Dados cadastrados com sucesso----")
	console.log(`${objeto.index} || Nome: ${objeto.nome} || Idade: ${objeto.idade} || Peso: ${objeto.peso} || Tipo sanguíneo: ${objeto.sangue} || Última doação: ${objeto.doacao}`)
}

// Função para listar dados
function listar() {
	console.log("----Função listar doadores----")

	for (let dado of dados) {
		console.log(`${dado.index} || Nome: ${dado.nome} || Idade: ${dado.idade} || Peso: ${dado.peso} || Tipo sanguíneo: ${dado.sangue} || Última doação: ${dado.doacao}`)
	}
	if(index == 0){
		console.log("Nenhum doador foi cadastrado ainda")
	}
}

// Função para buscar tipo sanguineo
function buscarTipo() {
	let tipoInserido = prompt("Por que tipo sanguíneo gostaria de procurar?").toUpperCase()
	let aux = 0

	console.log(`----Função buscar tipo sanguíneo----\nBuscas para ${tipoInserido}\nResultados:`)

	for (let dado of dados) {
		if (dado.sangue == tipoInserido) {
			console.log(`${dado.index} || Nome: ${dado.nome} || Idade: ${dado.idade} || Peso: ${dado.peso} || Tipo sanguíneo: ${dado.sangue} || Última doação: ${dado.doacao}`)
			aux++
		}
	}
	
	if (aux == 0) {
		console.log("Não achamos nenhum doador com esse tipo sanguíneo.")
	}
}

// Função para buscar
function buscarData() {
	let dataInserida = Number(prompt("Por que ano gostaria de procurar?"))
	let aux = 0

	console.log(`----Função buscar data----\nBuscas para ${dataInserida}\nResultados:`)

	for (let dado of dados) {
		if (dado.doacao.includes(dataInserida)) {
			console.log(`${dado.index} || Nome: ${dado.nome} || Idade: ${dado.idade} || Peso: ${dado.peso} || Tipo sanguíneo: ${dado.sangue} || Última doação: ${dado.doacao}`)
		aux++
		}
	}

	if (aux == 0) {
		console.log("Não achamos nenhum doador nesta data.")
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
