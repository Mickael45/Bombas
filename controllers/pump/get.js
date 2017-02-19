const Pump = require('./../../models/pump')

exports.getAllPumps = (req, res) => {
  Pump.find({}, function (err, pumps) {
    if (err) {
      return res.status(400).json({ message: 'Um erro occureu durante enquanto estava a recuperar as informações das bombas', error: err })
    }
    return res.send(pumps)
  })
}
