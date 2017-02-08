const mongoose = require('mongoose')

const ClientSchema = new mongoose.Schema({
  nome: String,
  morada: String,
  codigoPostal: String,
  localidade: String,
  pais: String,
  vat: String,
  data_registo: Date
})

module.exports = mongoose.model('clientes', ClientSchema)
