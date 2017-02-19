const Supply = require('./../../models/supply')
const Pump = require('./../../models/pump')

const saveSupply = (supply, res) => {
  supply.save(function (err, doc) {
    if (err) {
      return res.status(424).json({ message: 'O abastecimento não foi atualizado', error: err })
    }
    return res.json({ message: 'supply updated' })
  })
}

const fillSupply = (supply, cb, info, res, pumpCount, totalCount) => {
  supply.registo = pumpCount
  supply.transacao = 'TX' + totalCount
  supply.cartaoProfissional = info.proCard
  supply.idPosto = info.stationId
  supply.idVeiculo = info.vehicleId
  supply.km = info.km
  cb(supply, res)
}

exports.updateLastSupply = (req, res) => {
  Supply.find({ idPosto: req.body.stationId, idBomba: req.body.bombaId, transacao: '' }).sort({ dataAbastecimento: -1 }).exec(function (err, supply) {
    if (err) {
      return res.status(424).json({ message: 'Um erro occureu durante enquanto estava a atualizar as informações do abastecimento', error: err })
    } else if (supply.length === 0) {
      return res.status(400).json({ message: 'Este abastecimento ja foi registado' })
    }
    Supply.count({}, (err, totalCount) => {
      if (err) {
        return res.status(424).json({ message: 'Could not get supplies number', error: err })
      }
      Supply.count({ idBomba: req.body.bombaId }, (err, pumpCount) => {
        if (err) {
          return res.status(424).json({ message: 'Could not get supplies number', error: err })
        }
        fillSupply(supply[0], saveSupply, req.body, res, pumpCount, totalCount)
      })
    })
  })
}

exports.registerSupply = (req, res) => {
  var supply = new Supply({
    transacao: '',
    volumeAbastecimento: req.query.litros,
    cartaoProfissional: '',
    idPosto: req.query.stationId,
    idBomba: req.query.idBomba,
    dataAbastecimento: Date.now()
  })
  Supply.find({ idPost: req.query.stationId, idBomba: req.query.idBomba }).sort({ dataAbastecimento: -1 }).exec(function (err, supplies) {
    if (err) {
      console.log('err')
    }
    if (supplies.length > 0 && !supplies[0]._transacao) {
      supplies[0].remove(function (err, doc) {
        if (err) {
          console.log('not deleted')
        }
      })
    }
    supply.registo = supplies.length
    supply.save(function (err) {
      if (err) {
        return res.status(400).json({ message: 'Um erro occureu durante enquanto estava a guardar as informações do abastecimento', error: err })
      }
      Pump.findOne({ idPosto: req.query.stationId }, (err, pump) => {
        if (err) {
          return res.status(400).json({ message: 'Um erro occureu durante enquanto estava a recuperar as informações do posto', error: err })
        }
        pump.abastecimentos.push(supply._id)
        pump.save(function (err) {
          if (err) {
            return res.status(400).json({ message: 'Um erro occureu durante enquanto estava a fazer ligação entro o abasteciment e a bomba', error: err })
          }
          return res.json(supply)
        })
      })
    })
  })
}
