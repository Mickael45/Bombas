const Station = require('./../../models/station')
const Pump = require('./../../models/pump')

exports.getStations = (req, res) => {
  Station.find({}, function (err, stations) {
    if (err) {
      return res.status(400).json({ message: 'Stations not found', error: err })
    }
    return res.send(stations)
  })
}

exports.getStationById = (req, res) => {
  Station.findOne({ _idPosto: req.params.id }, function (err, station) {
    if (err) {
      return res.status(400).json({ message: 'Station not found', error: err })
    }
    Pump.find({ station_id: station._idPosto }, function (err, pump) {
      if (err) {
        return res.status(400).json({ message: 'Station not found', error: err })
      }
      return res.json({ station, pumpNumber: pump.length })
    })
  })
}
