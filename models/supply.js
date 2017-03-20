const mongoose = require('mongoose')

const SupplySchema = new mongoose.Schema({
  registo: String,
  transacao: String,
  volumeAbastecimento: String,
  cartaoProfissional: String,
  combustivel: String,
  idPosto: String,
  idVeiculo: String,
  km: String,
  idBomba: String,
  signal: String,
  dataAbastecimento: Date
})

module.exports = mongoose.model('abastecimentos', SupplySchema)
