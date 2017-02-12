const Supply = require('./../../models/supply')

exports.getSupplies = (req, res) => {
  Supply.find({dataAbastecimento: { '$gte': req.query.startingDate, '$lt': req.query.endingDate }}, function (err, supplies) {
    if (err) {
      return res.status(400).json({ message: 'Supplies not found', error: err })
    }
    return res.send(supplies)
  })
}
