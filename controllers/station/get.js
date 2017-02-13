const Station = require('./../../models/station')

exports.getStations = (req, res) => {
  Station.find({}, function (err, stations) {
    if (err) {
      return res.status(400).json({ message: 'Stations not found', error: err })
    }
    return res.send(stations)
  })
}

exports.getStationById = (req, res) => {
  Station.findOne({ idPosto: req.params.id }, function (err, station) {
    if (err) {
      return res.status(400).json({ message: 'Station not found', error: err })
    }
    return res.json(station)
  })
}
