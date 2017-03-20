const findClientById = (obj, idCliente) => {
  for (var i = 0; i < obj.clients.length; i++) {
    if (obj.clients[i]._id === idCliente) {
      return obj.clients[i]
    }
  }
}

const createClientObject = (obj, idCliente) => {
  var client = findClientById(obj, idCliente)

  return {
    pais: client.pais,
    vat: client.nif
  }
}

const findVehicleById = (obj, vehicleId) => {
  for (var i = 0; i < obj.vehicles.length; i++) {
    if (obj.vehicles[i].idVeiculo === vehicleId) {
      return obj.vehicles[i]
    }
  }
}

const createVehicleObject = (obj, vehicleId, km, combustivel) => {
  var foundVehicle = findVehicleById(obj, vehicleId)

  var vehicle = {
    vehicle: {
      pais: foundVehicle.pais,
      matricula: foundVehicle.matricula,
      combustivel: combustivel,
      km: km
    },
    idCliente: foundVehicle.idCliente
  }
  if (vehicle.vehicle.pais !== 'PT') {
    vehicle.vehicle.pesoBruto = foundVehicle.pesoBruto
  }
  return vehicle
}

const filterSupplyByStationId = (obj, stationId) => {
  var supplies = []
  obj.supplies.forEach(function (supply) {
    if (supply.idPosto === stationId) {
      supplies.push(supply)
    }
  })
  return supplies
}

const createSupplyObj = (obj, stationId) => {
  var stationSupplies = []
  var supplyIndex = 0
  var supplies = filterSupplyByStationId(obj, stationId)

  supplies.forEach(function (supply) {
    stationSupplies.push({
      _registo: supply.registo,
      _transacao: supply.transacao,
      dataAbastecimento: supply.dataAbastecimento,
      volumeAbastecimento: supply.volumeAbastecimento,
      cartaoProfissional: supply.cartaoProfissional
    })
    var vehicle = createVehicleObject(obj, supply.idVeiculo, supply.km, supply.combustivel)
    stationSupplies[supplyIndex].veiculo = vehicle.vehicle
    stationSupplies[supplyIndex++].sujeitoPassivo = createClientObject(obj, vehicle.idCliente)
  })
  return stationSupplies
}

const populateStations = (obj, proSupply) => {
  obj.stations.forEach(function (station) {
    proSupply.Abastecimentos.push({
      _idPosto: station.idPosto,
      Abastecimento: createSupplyObj(obj, station.idPosto)
    })
  })
}

exports.createJson = (obj) => {
  console.log('obj', obj)
  var proSupply = {
    '_xmlns': 'http://www.at.gov.pt/2016/AbastecimentoProfissional',
    '_xmlns:xsi': 'http://www.w3.org/2001/XMLSchema-instance',
    '_xsi:schemaLocation': 'http://www.at.gov.pt/2016/AbastecimentoProfissional AbastecimentoPro.xsd',
    '_versao': '1',
    'Abastecimentos': []
  }
  populateStations(obj, proSupply)
  return proSupply
}
