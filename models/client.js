const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
  nome: String,
  morada: String,
  codigoPostal: String,
  localidade: String,
  pais: String,
  nif: String,
  dataRegisto: Date
})

module.exports = mongoose.model('clientes', ClientSchema)
