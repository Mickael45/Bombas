const mongoose = require('mongoose')

const SupplySchema = new mongoose.Schema({
  _registo: String,
  _transacao: String,
  volumeAbastecimento: String,
  cartaoProfissional: String,
  station_id: String,
  veiculo_id: String,
  km: String,
  bomba_id: String,
  dataAbastecimento: Date
})

module.exports = mongoose.model('Abastecimentos', SupplySchema)
