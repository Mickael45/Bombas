const findClientById = (obj, clientId) => {
  for (var i = 0; i < obj.clients.length; i++) {
    if (obj.clients[i]._id === clientId) {
      return obj.clients[i]
    }
  }
}

const createClientObject = (obj, vehicle) => {
  var client = findClientById(obj, vehicle)

  return {
    pais: client.pais,
    vat: client.vat
  }
}

const findVehicleById = (obj, vehicleId) => {
  for (var i = 0; i < obj.vehicles.length; i++) {
    if (obj.vehicles[i]._id === vehicleId) {
      return obj.vehicles[i]
    }
  }
}

const createVehicleObject = (obj, vehicleId) => {
  var foundVehicle = findVehicleById(obj, vehicleId)

  var vehicle = {
    vehicle: {
      pais: foundVehicle.pais,
      matricula: foundVehicle.matricula,
      combustivel: foundVehicle.combustivel,
      km: foundVehicle.km
    },
    client_id: foundVehicle.cliente_id
  }
  if (vehicle.pais !== 'PT') {
    vehicle.pesoBruto = foundVehicle.pesoBruto
  }
  return vehicle
}

const filterSupplyByStationId = (obj, stationId) => {
  var supplies = []
  obj.supplies.forEach(function (supply) {
    console.log(supply.station_id)
    console.log(stationId)
    if (supply.station_id === stationId) {
      supplies.push(supply)
    }
  })
  return supplies
}

const createSupplyObj = (obj, stationId) => {
  var stationSupplies = []
  var supplyIndex = 0
  var supplies = filterSupplyByStationId(obj, stationId)

  console.log(obj.supplies)
  supplies.forEach(function (supply) {
    stationSupplies.push({
      _registo: supply._registo,
      _transacao: supply._transacao,
      dataAbastecimento: supply.dataAbastecimento,
      volumeAbastecimento: supply.volumeAbastecimento,
      cartaoProfissional: supply.cartaoProfissional
    })
    var vehicle = createVehicleObject(obj, supply.veiculo_id)
    stationSupplies[supplyIndex].veiculo = vehicle.vehicle
    stationSupplies[supplyIndex++].sujeitoPassivo = createClientObject(obj, vehicle.client_id)
  })
  return stationSupplies
}

const populateStations = (obj, proSupply) => {
  console.log('jgroegj,iormesgh')
  console.log(obj)
  obj.stations.forEach(function (station) {
    proSupply.Abastecimentos.push({
      _idPosto: station._idPosto,
      Abastecimento: createSupplyObj(obj, station._id)
    })
  })
}

exports.createJson = (obj) => {
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
