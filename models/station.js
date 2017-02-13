const mongoose = require('mongoose')

const StationSchema = new mongoose.Schema({
  idPosto: String,
  nome: String,
  morada: String,
  codigoPostal: String,
  cidade: String,
  nif: String,
  enmc: String,
  bombas: Array
})

module.exports = mongoose.model('postos', StationSchema)
