const express = require('express')

const server = express()

const cors = require('cors')

const Correios = require('node-correios')
const correio = new Correios()

const porta = 3011

server.use(cors())

server.listen(porta, () => console.log(`Servidor rodando na porta: ${porta}`))

server.get('/', (requisicao, resposta) =>{
    console.log('Rota de CEP encontrado!!!')
    const {cep} = requisicao.query
    console.log('>>>' + cep)

    correio.consultaCEP({cep: cep})
    .then( resultado => {
        resposta.send(resultado)
        console.log(resultado)
        console.log('Sucesso na consulta!!!')
    })
    .catch(error => {
        console.log('Ocorreun um Erro: ' + error)
    })
})