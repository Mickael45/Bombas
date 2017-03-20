const mongoose = require('mongoose')

const PumpSchema = new mongoose.Schema({
  idPosto: String,
  idBomba: String,
  idCombustivel: String,
  abastecimentos: Array,
  creationDate: Date
})

module.exports = mongoose.model('Bomba', PumpSchema)
