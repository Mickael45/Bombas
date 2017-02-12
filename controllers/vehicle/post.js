const Vehicle = require('./../../models/vehicle')

exports.verify = (req, res) => {
  Vehicle.findById(req.params.id, function (err, vehicle) {
    if (err) {
      return res.status(400).json({ message: 'Vehicle not found', error: err })
    } else {
      if (vehicle.pin !== req.body.pin) {
        return res.status(400).json({ message: 'Bad pin', error: err })
      }
      return res.send()
    }
  })
}
