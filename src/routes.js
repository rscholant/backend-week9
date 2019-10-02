const express = require('express');

const routes = express.Router();

// GET, POST, PUT, DELETE { MÉTODOS MAIS UTILIZADOS }
// req.query = Acessar query params (mais utilizado para filtros)
// req.params = Acessar route params (para edição ou delete de registros especificos)
// req.body = Acessar corpo da requisição (mais utilizado para criação/utilização de registros)
routes.get('/', (req, res) => res.json({ idade: req.query.idade }));

module.exports = routes;
