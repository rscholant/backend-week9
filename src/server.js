const express = require('express');
const routes = require('./routes');

const app = express();

// utilizado para o express reconhecer o json.
app.use(express.json());
app.use(routes);

app.listen(3333);
