const Supply = require('./../models/supply')
const Station = require('./../models/station')
const Vehicle = require('./../models/vehicle')
const Client = require('./../models/client')

exports.getSupplies = (req, res) => {
  Supply.find(req.body.stationsIds, function (err, supplies) {
    if (err) {
      return res.status(404).json({ message: 'Supplies not found', error: err })
    }
    return res.send(supplies)
  })
}

exports.getStations = (req, res) => {
  Station.find({}, function (err, stations) {
    if (err) {
      return res.status(404).json({ message: 'Stations not found', error: err })
    }
    return res.send(stations)
  })
}

exports.getVehicles = (req, res) => {
  Vehicle.find(req.body.vehicleIds, function (err, vehicles) {
    if (err) {
      return res.status(404).json({ message: 'Vehicles not found', error: err })
    }
    return res.send(vehicles)
  })
}

exports.getClients = (req, res) => {
  Client.find(req.body.clientIds, function (err, clients) {
    if (err) {
      return res.status(404).json({ message: 'Clients not found', error: err })
    }
    return res.send(clients)
  })
}

exports.getVehicleById = (req, res) => {
  Vehicle.findById(req.params.id, function (err, vehicle) {
    if (err) {
      return res.status(404).json({ message: 'Vehicle not found', error: err })
    }
    return res.send(vehicle)
  })
}

exports.getClientById = (req, res) => {
  Client.findById(req.params.id, function (err, client) {
    if (err) {
      return res.status(404).json({ message: 'Client not found', error: err })
    }
    return res.send(client)
  })
}

exports.getStationById = (req, res) => {
  Station.findOne({ _idPosto: req.params.id }, function (err, station) {
    if (err) {
      return res.status(404).json({ message: 'Client not found', error: err })
    }
    return res.send(station)
  })
}
