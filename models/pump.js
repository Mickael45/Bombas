const mongoose = require('mongoose')

const PumpSchema = new mongoose.Schema({
  station_id: String,
  id: String,
  gas_id: String,
  gas: String,
  creationDate: Date
})

module.exports = mongoose.model('bombas', PumpSchema)
