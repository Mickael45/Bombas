const Station = require('./../../models/station')

exports.getStations = (req, res) => {
  Station.find({}, function (err, stations) {
    if (err) {
      return res.status(400).json({ message: 'Os postos não foram encontrados', error: err })
    }
    return res.send(stations)
  })
}

exports.getStationById = (req, res) => {
  Station.findOne({ idPosto: req.params.id }, function (err, station) {
    if (err) {
      return res.status(400).json({ message: 'O posto não foi encontrado', error: err })
    }
    return res.json(station)
  })
}
