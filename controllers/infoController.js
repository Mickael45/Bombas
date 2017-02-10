const Supply = require('./../models/supply')

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
    }
    fillSupply(supply[0], saveSupply, req.body, res)
  })
}

exports.registerInfo = (req, res) => {
  return res.send(req.body)
}
