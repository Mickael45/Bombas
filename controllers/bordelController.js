const Supply = require('./../models/supply')
const Station = require('./../models/station')
const Vehicle = require('./../models/vehicle')
const Client = require('./../models/client')

exports.getSupply = (req, res) => {
  Supply.find(req.body.stationsIds, function (err, supplies) {
    if (err) {
      return res.status(404).json({ message: 'Supplies not found', error: err })
    }
    return res.send(supplies)
  })
}

exports.getStation = (req, res) => {
  Station.find({}, function (err, stations) {
    if (err) {
      return res.status(404).json({ message: 'Stations not found', error: err })
    }
    return res.send(stations)
  })
}

exports.getVehicle = (req, res) => {
  Vehicle.find(req.body.vehicleIds, function (err, vehicles) {
    if (err) {
      return res.status(404).json({ message: 'Vehicles not found', error: err })
    }
    return res.send(vehicles)
  })
}

exports.getClient = (req, res) => {
  Client.find(req.body.clientIds, function (err, clients) {
    if (err) {
      return res.status(404).json({ message: 'Clients not found', error: err })
    }
    return res.send(clients)
  })
}
