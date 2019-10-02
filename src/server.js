const express = require('express');

const app = express();

// GET, POST, PUT, DELETE { MÉTODOS MAIS UTILIZADOS }

app.get('/', (req, res) => res.json({ message: 'Hello World' }));

app.listen(3333);
