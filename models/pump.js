const mongoose = require('mongoose')

const PumpSchema = new mongoose.Schema({
  station_id: String,
  gas_id: String,
  gas: String,
  liters: String,
  creationDate: Date
})

module.exports = mongoose.model('bombas', PumpSchema)
