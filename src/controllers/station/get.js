const Station = require('./../../models/station')
const Pump = require('./../../models/pump')

exports.getStations = (req, res) => {
  Station.find({}, function (err, stations) {
    if (err) {
      return res.status(400).json({ message: 'Os postos não foram encontrados', error: err })
    }
    return res.send(stations)
  })
}

const retreiveAssociatedPump = (pumpsId, stationId, res, cb) => {
  var completePumps = []
  console.log('pumpsId', pumpsId)
  console.log('pumpsId length', pumpsId.length)
  for (var index = 0; index < pumpsId.length;) {
    Pump.findById(pumpsId[index], (err, pump) => {
      if (err) {
        return res.status(400).json({ message: 'Um erro occureu enquanto estava a recuperar as informações das bombas', error: err })
      } else if (!pump) {
        return res.status(400).json({ message: 'Nehuma bomba esta associada a este posto', error: err, id: stationId })
      }
      completePumps.push(pump)
      console.log('PUMP:', pump)
      if (index === pumpsId.length) {
        console.log('SEARCH COMPLETED')
        cb(completePumps)
      }
      index++
    })
  }
}

exports.getStationById = (req, res) => {
  Station.findOne({ idPosto: req.params.id }, function (err, station) {
    if (err) {
      return res.status(400).json({ message: 'Um erro occureu enquanto estava a recuperar as informações das bombas', error: err })
    } else if (!station) {
      return res.status(400).json({ message: 'Nehum posto foi encontrado para este id', error: err, id: req.params.id })
    } else {
      Pump.find({ _id: station.bombas }, (err, pumps) => {
        if (err) {
          return res.status(400).json({ message: 'Um erro occureu enquanto estava a recuperar as informações das bombas', error: err })
        } else if (!pumps) {
          return res.status(400).json({ message: 'Nehuma bomba esta associada a este posto', error: err, id: req.params.id })
        }
        station.bombas = pumps
        return res.json(station)
      })
    }
  })
}
