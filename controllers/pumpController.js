const Pump = require('./../models/pump')
const Supply = require('./../models/supply')

exports.registerPump = (req, res) => {
  var pump = new Pump({
    station_id: req.body.station_id,
    gas_id: req.body.gas_id,
    creationDate: Date.now()
  })
  pump.save(function (err, doc) {
    if (err) {
      return res.status(400).json({ message: 'Error while saving pump', error: err })
    }
    return res.json({ message: 'pump successfully created', doc })
  })
}

exports.registerSupply = (req, res) => {
  var supply = new Supply({
    _registo: '',
    _transacao: '',
    volumeAbastecimento: req.body.litros,
    cartaoProfissional: '',
    station_id: String,
    veiculo_id: String,
    bomba_id: String,
    dataAbastecimento: Date.now()
  })
  return res.json(supply)
}
