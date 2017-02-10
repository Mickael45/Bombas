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
    _transacao: '',
    volumeAbastecimento: req.query.litros,
    cartaoProfissional: '',
    station_id: req.query.stationId,
    bomba_id: req.query.idBomba,
    dataAbastecimento: Date.now()
  })
  Supply.find({ station_id: req.query.stationId, bomba_id: req.query.idBomba }).sort({ dataAbastecimento: -1 }).exec(function (err, supplies) {
    if (err) {
      console.log('err')
    }
    if (supplies.length > 0 && !supplies[0]._transacao) {
      supplies[0].remove(function (err, doc) {
        if (err) {
          console.log('not deleted')
        }
      })
    }
    supply._registo = supplies.length
    supply.save(function (err) {
      if (err) {
        return res.status(400).json({ message: 'Error while saving supply', error: err })
      }
      return res.json(supply)
    })
  })
}
