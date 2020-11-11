const mongoose = require('mongoose')

const VehicleSchema = new mongoose.Schema({
  activo: { type: Boolean, default: true },
  idVeiculo: String,
  idCliente: String,
  matricula: String,
  pais: String,
  cartaoProfissional: String,
  pesoBruto: String,
  pin: String,
  dataRegisto: Date,
  dataValidade: Date
})

module.exports = mongoose.model('viaturas', VehicleSchema)
