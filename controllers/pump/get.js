const Pump = require('./../../models/pump')

exports.getAllPumps = (req, res) => {
  Pump.find({}, function (err, pumps) {
    if (err) {
      return res.status(400).json({ message: 'An error occured while retrieving pumps', error: err })
    }
    return res.send(pumps)
  })
}
