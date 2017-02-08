const Client = require('./../models/client')
const Pump = require('./../models/pump')
const Station = require('./../models/station')
const Supply = require('./../models/supply')
const Vehicle = require('./../models/vehicle')

exports.createClient = (req, res) => {
  var client = new Client({
  })
  client.save(function (err, doc) {
    if (err) {
      return res.status(424).json({ message: 'There was a problem creating the client', error: err })
    } else {
      return res.json({ message: 'Client has been created.', client })
    }
  })
}

exports.createPump = (req, res) => {
  var pump = new Pump({
  })
  pump.save(function (err, doc) {
    if (err) {
      return res.status(424).json({ message: 'There was a problem creating the pump', error: err })
    } else {
      return res.json({ message: 'Pump has been created', pump })
    }
  })
}

exports.createStation = (req, res) => {
  var station = new Station({
  })
  station.save(function (err, doc) {
    if (err) {
      return res.status(424).json({ message: 'There was a problem creating the station', error: err })
    } else {
      return res.json({ message: 'Station has been created.', station })
    }
  })
}

exports.createSupply = (req, res) => {
  var supply = new Supply({
  })
  supply.save(function (err, doc) {
    if (err) {
      return res.status(424).json({ message: 'There was a problem creating the supply', error: err })
    } else {
      return res.json({ message: 'Supply has been created.', supply })
    }
  })
}

exports.createVehicle = (req, res) => {
  var vehicle = new Vehicle({
  })
  vehicle.save(function (err, doc) {
    if (err) {
      return res.status(424).json({ message: 'There was a problem creating the vehicle', error: err })
    } else {
      return res.json({ message: 'Vehicle has been created.', vehicle })
    }
  })
}
