const mongoose = require('mongoose')

const ProSupplySchema = new mongoose.Schema({
  _xmlns: String,
  '_xmlns:xsi': String,
  '_xsi:schemaLocation': String,
  _versao: String,
  stations: Array
})

module.exports = mongoose.model('AbastecimentoProfissional', ProSupplySchema)
