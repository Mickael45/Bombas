const Vehicle = require('./../../models/vehicle')

exports.getVehicles = (req, res) => {
  Vehicle.find(req.body.vehicleIds, function (err, vehicles) {
    if (err) {
      return res.status(400).json({ message: 'Um erro occureu durante enquanto estava a recuperar as informações do vehiculo', error: err })
    }
    return res.send(vehicles)
  })
}

exports.getVehicleById = (req, res) => {
  Vehicle.findOne({ idVeiculo: req.params.id }, function (err, vehicle) {
    if (err) {
      return res.status(400).json({ message: 'Um erro occureu durante enquanto estava a recuperar as informações do vehiculo', error: err })
    } else if (!vehicle) {
      return res.status(400).json({ message: 'Não foi encontrado nehum veiculo para esse id', error: err })
    }
    return res.send(vehicle)
  })
}
