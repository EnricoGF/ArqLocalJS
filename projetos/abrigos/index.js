// Definições básicas
let continuar = true
const dados = []
let index = 0

// Função para cadastro
function cadastrar() {
	let nomeUser = prompt(`Qual o nome do abrigo?`).toUpperCase()
	let enderecoUser = prompt(`Qual o endereço do abrigo?`).toUpperCase()
	let telefoneUser = Number(prompt(`Qual o telefone do abrigo`))
	let capacidadeUser = Number(prompt(`Qual a capacidade máxima do abrigo?`))
	index++

	let objeto = {
		index: index,
		nome: nomeUser,
		endereco: enderecoUser,
		telefone: telefoneUser,
		capacidade: capacidadeUser,
	}

	dados.push(objeto)
	
	console.log("----Dados cadastrados com sucesso----")
	console.log(`Nome: ${objeto.nome} || Endereço: ${objeto.endereco} || Telefone: ${objeto.telefone} || Capacidade: ${objeto.capacidade}`)
}

// Função para listar
function listar() {
	console.log(`----Função listar abrigos----`)
	for (let dado of dados) {
		console.log(`${dado.index} || Nome: ${dado.nome} || Endereço: ${dado.endereco} || Telefone: ${dado.telefone} || Capacidade: ${dado.capacidade}`)
	}
	if(index == 0){
		console.log("Nenhum abrigo foi cadastrado ainda")
	}
}

// Função para buscar abrigo
function buscar() {
	let cidadeInserida = prompt("Por qual cidade gostaria de procurar por um abrigo?").toUpperCase()
	let aux = 0

	console.log(`----Função buscar abrigo----\nBuscas para ${cidadeInserida}\nResultados:`)

	for (let dado of dados) {
		if (dado.endereco.includes(cidadeInserida)) {
			console.log(`${dado.index} || Nome: ${dado.nome} || Endereço: ${dado.endereco} || Telefone: ${dado.telefone} || Capacidade: ${dado.capacidade}`)
			aux++
		}
	}

	if (aux == 0) {
		console.log(`Não achamos nenhum abrigo nesta cidade`)
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
	let pergunta  = "====ABRIGOS TEMPORÁRIOS====\n"
		pergunta += "-------------------------\n"
		pergunta += "Escolha uma opção:\n"
		pergunta += "1. Cadastrar abrigo\n"
		pergunta += "2. Listar abrigos\n"
		pergunta += "3. Procurar abrigo\n"
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
			buscar()
			break
		case 0:
			sair()
			break
		default:
			invalido()
	}
}
