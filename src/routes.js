const express = require('express');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

// GET, POST, PUT, DELETE { MÉTODOS MAIS UTILIZADOS }
// req.query = Acessar query params (mais utilizado para filtros)
// req.params = Acessar route params (para edição ou delete de registros especificos)
// req.body = Acessar corpo da requisição (mais utilizado para criação/utilização de registros)
routes.post('/sessions', SessionController.store);

module.exports = routes;
