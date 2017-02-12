const Supply = require('./../../models/supply')

const saveSupply = (supply, res) => {
  supply.save(function (err, doc) {
    if (err) {
      return res.status(424).json({ message: 'Failed to update supply', error: err })
    }
    return res.json({ message: 'supply updated' })
  })
}

const fillSupply = (supply, cb, info, res) => {
  supply._transacao = 'TX' + supply._registo
  supply.cartaoProfissional = info.proCard
  supply.station_id = info.stationId
  supply.veiculo_id = info.vehicleId
  cb(supply, res)
}

exports.updateLastSupply = (req, res) => {
  Supply.find({ station_id: req.body.stationId, bomba_id: req.body.bombaId, _transacao: '' }).sort({ dataAbastecimento: -1 }).exec(function (err, supply) {
    if (err) {
      return res.status(424).json({ message: 'Failed to find supplies', error: err })
    } else if (supply.length === 0) {
      return res.status(400).json({ message: 'There is no supply to register' })
    }
    fillSupply(supply[0], saveSupply, req.body, res)
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
