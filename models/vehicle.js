const mongoose = require('mongoose')

const VehicleSchema = new mongoose.Schema({
  activo: { type: Boolean, default: true },
  cliente_id: String,
  matricula: String,
  pais: String,
  combustivel: String,
  km: String,
  pesoBruto: String,
  pin: String,
  data_registo: Date
})

module.exports = mongoose.model('viaturas', VehicleSchema)
