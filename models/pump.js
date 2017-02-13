const mongoose = require('mongoose')

const PumpSchema = new mongoose.Schema({
  idPosto: String,
  idCombustivel: String,
  abastecimentos: Array,
  creationDate: Date
})

module.exports = mongoose.model('Bomba', PumpSchema)
