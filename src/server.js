const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();
mongoose.connect(
  'mongodb+srv://scholant:031290@cluster0-zrb8h.gcp.mongodb.net/semana09?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);
// utilizado para o express reconhecer o json.
app.use(express.json());
app.use(routes);

app.listen(3333);
