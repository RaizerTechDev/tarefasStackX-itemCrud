const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  telefone: { type: String, required: true },
  data_cadastro: { type: Date, default: Date.now },
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
