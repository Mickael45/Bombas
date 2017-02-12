const Vehicle = require('./../../models/vehicle')

exports.getVehicles = (req, res) => {
  Vehicle.find(req.body.vehicleIds, function (err, vehicles) {
    if (err) {
      return res.status(400).json({ message: 'Vehicles not found', error: err })
    }
    return res.send(vehicles)
  })
}

exports.getVehicleById = (req, res) => {
  Vehicle.findById(req.params.id, function (err, vehicle) {
    if (err) {
      return res.status(400).json({ message: 'Vehicle not found', error: err })
    }
    return res.send(vehicle)
  })
}
