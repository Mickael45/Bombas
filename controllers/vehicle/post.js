const Vehicle = require('./../../models/vehicle')

exports.verify = (req, res) => {
  Vehicle.findOne({ idVeiculo: req.params.id }, function (err, vehicle) {
    if (err || !vehicle) {
      return res.status(400).json({ message: 'Um erro occureu durante enquanto estava a recuperar as informações do vehiculo', error: err })
    } else {
      if (vehicle.pin !== req.body.pin) {
        return res.status(400).json({ message: 'Pin errado', error: err })
      }
      return res.send()
    }
  })
}
