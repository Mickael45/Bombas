const axios = require('axios')
const strings = require('./constantStrings')
const config = require('./../config/config')

export function sendXmlToServer (obj) {
  var request = axios.post(`${config.SERVER_URL}/auth/xml`, obj)

  return {
    type: strings.GETTING_XML,
    payload: request
  }
}

export function getClientIds (vehicles, cb) {
  var clientsIds = []

  vehicles.forEach(function (vehicle) {
    clientsIds.push({ _id: vehicle.cliente_id })
  })
  var request = axios.get(`${config.SERVER_URL}/auth/clients`, clientsIds)

  return {
    type: strings.GETTING_XML,
    payload: request
  }
}

export function getVehiclesByIds (supplies, cb) {
  var vehicleIds = []

  supplies.forEach(function (supply) {
    vehicleIds.push({ _id: supply.veiculo_id })
  })
  var request = axios.get(`${config.SERVER_URL}/auth/vehicles`, vehicleIds)

  return {
    type: strings.GETTING_XML,
    payload: request
  }
}

export function getSupplierByIds (stations, cb) {
  var stationsIds = []

  stations.forEach(function (station) {
    stationsIds.push({ _id: station.Abastecimento })
  })
  var request = axios.get(`${config.SERVER_URL}/auth/supplies`, stationsIds)

  return {
    type: strings.GETTING_XML,
    payload: request
  }
}

export function getStations () {
  var request = axios.get(`${config.SERVER_URL}/auth/stations`)

  return {
    type: strings.GETTING_XML,
    payload: request
  }
}

export function getXmlSuccess (xml) {
  return {
    type: strings.GETTING_XML_SUCCESS,
    payload: xml
  }
}

export function getXmlFailure (error) {
  return {
    type: strings.GETTING_XML_FAILURE,
    payload: error
  }
}
