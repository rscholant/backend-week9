const mongoose = require('mongoose');

// GET, POST, PUT, DELETE { MÉTODOS MAIS UTILIZADOS }
// req.query = Acessar query params (mais utilizado para filtros)
// req.params = Acessar route params (para edição ou delete de registros especificos)
// req.body = Acessar corpo da requisição (mais utilizado para criação/utilização de registros)
const UserSchema = new mongoose.Schema({
  email: String,
});

module.exports = mongoose.model('User', UserSchema);
