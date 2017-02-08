const mongoose = require('mongoose')

const StationSchema = new mongoose.Schema({
  _idPosto: String,
  name: String,
  adress: String,
  zipCode: String,
  city: String,
  nif: String,
  enmc: String,
  Abastecimento: Array
})

module.exports = mongoose.model('Postos', StationSchema)
