const Supply = require('./../../models/supply')

exports.getSupplies = (req, res) => {
  Supply.find({dataAbastecimento: { '$gte': req.query.startingDate, '$lt': req.query.endingDate }}, function (err, supplies) {
    if (err) {
      return res.status(400).json({ message: 'Um erro occureu durante enquanto estava a recuperar as informações do abastecimento', error: err })
    } else if (!supplies) {
      return res.status(400).json({ message: 'Não a nehum abastecimento de pronto para esta bomba', err: null })
    }
    return res.send(supplies)
  })
}

exports.getLastSupplyQuantity = (req, res) => {
  Supply.find({ idPosto: req.query.stationId, idBomba: req.query.bombaId, transacao: '' }, function (err, supplies) {
    if (err) {
      return res.status(400).json({ message: 'Um erro occureu durante enquanto estava a recuperar as informações do abastecimento', error: err })
    } else if (supplies.length === 0) {
      return res.status(400).json({ message: 'Não a nehum abastecimento de pronto para esta bomba', err: null })
    }
    return res.send(supplies[0].volumeAbastecimento)
  })
}
