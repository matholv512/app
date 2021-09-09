const express = require('express');
const server = express();

const porta = 3011;

server.listen(porta, () => console.log(`Servidor rodando na porta: ${porta}`));

server.get('/', (requisicao, resposta) => {
    console.log('Rota de Cep Encontrada!!!')
    const { cep } = requisicao.query;
    console.log('>> ' , cep);
})