const Supply = require('./../../models/supply')
const Pump = require('./../../models/pump')

const updateSupply = (supply, res) => {
  supply.save(function (err, doc) {
    if (err) {
      return res.status(424).json({ message: 'O abastecimento não foi atualizado', error: err })
    }
    return res.json({ message: 'supply updated' })
  })
}

const fillSupply = (supply, cb, info, res) => {
  supply.transacao = 'TX' + supply.registo
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
    fillSupply(supply[0], updateSupply, req.body, res)
  })
}

const updatePump = (newSupply, pump, res) => {
  pump.save(function (err) {
    if (err) {
      return res.status(400).json({ message: 'Um erro occureu durante enquanto estava a fazer ligação entro o abasteciment e a bomba', error: err })
    }
    return res.json(newSupply)
  })
}

const saveSupply = (newSupply, res, pump, cb) => {
  newSupply.save(function (err, doc) {
    if (err) {
      return res.status(424).json({ message: 'O abastecimento não foi atualizado', error: err })
    }
    cb(newSupply, pump, res)
  })
}

const linkSupplyToPumpById = (newSupply, res, postoId, bombaId, cb) => {
  Pump.findOne({ idPosto: postoId, idBomba: bombaId }, (err, pump) => {
    if (err || !pump) {
      return res.status(400).json({ message: 'Um erro occureu durante enquanto estava a recuperar as informações do posto ' + bombaId, error: err })
    }
    pump.abastecimentos.push(newSupply._id)
    newSupply.combustivel = pump.idCombustivel
    cb(newSupply, res, pump, updatePump)
  })
}

const getSupplyCountPerStationId = (query, newSupply, res, cb) => {
  Supply.count({ idPosto: query.postoId }, (err, suppliesNumber) => {
    if (err) {
      return res.status(424).json({ message: 'Could not get supplies number', error: err })
    }
    newSupply.registo = suppliesNumber + 1
    cb(newSupply, res, query.postoId, query.id, saveSupply)
  })
}

const deleteSupplyEntryFromPump = (supplyId, postoId, bombaId, cb) => {
  Pump.findOne({ idPosto: postoId, idBomba: bombaId }, (err, pump) => {
    if (err || !pump) {
      console.log('err', err)
      cb(err)
    }
    var index = pump.abastecimentos.indexOf(supplyId)
    pump.abastecimentos.splice(index, 1)
    pump.save(function (err) {
      if (err) {
        cb(err)
      }
      cb()
    })
  })
}

const deleteLastSupplyIfEmpty = (req, res, supplies, newSupply, cb) => {
  if (supplies.length > 0 && !supplies[0].transacao) {
    var supplyId = supplies[0]._id
    supplies[0].remove(function (err, doc) {
      if (err) {
        console.log('not deleted')
      } else {
        deleteSupplyEntryFromPump(supplyId, req.query.postoId, req.query.id, (err) => {
          if (err) {
            return res.status(400).json({ message: 'Um erro occureu durante enquanto estava a recuperar as informações do posto ' + req.query.id, error: err })
          }
          cb(req.query, newSupply, res, linkSupplyToPumpById)
        })
      }
    })
  } else {
    cb(req.query, newSupply, res, linkSupplyToPumpById)
  }
}

exports.registerSupply = (req, res) => {
  var supply = new Supply({
    transacao: '',
    volumeAbastecimento: req.query.l,
    cartaoProfissional: '',
    idPosto: req.query.postoId,
    idBomba: req.query.id,
    signal: req.query.s,
    dataAbastecimento: Date.now()
  })
  console.log('body', req.body)
  console.log('query', req.query)
  Supply.find({ idPosto: req.query.postoId, idBomba: req.query.id }).sort({ dataAbastecimento: -1 }).exec(function (err, supplies) {
    if (err) {
      return res.status(400).json({ message: 'Um erro occureu durante enquanto estava a recuperar os abastecimentos relativos a bomba' + req.query.id, error: err })
    }
    deleteLastSupplyIfEmpty(req, res, supplies, supply, getSupplyCountPerStationId)
  })
}
