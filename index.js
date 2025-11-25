// index.js
const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir o uso de JSON no corpo das requisições
app.use(express.json());

// Definindo uma rota simples de teste
app.get('/', (req, res) => {
  res.send('Bem-vindo à API da Loja de Joalheria!');
});

// Importando e utilizando as rotas da loja
const produtoRoutes = require('./routes/produtos');
app.use('/api/produtos', produtoRoutes);

// Iniciando o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
