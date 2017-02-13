const axios = require('axios')
const strings = require('./constants/xml')
const config = require('./../config/server')

export function sendXmlToServer (obj) {
  var request = axios.post(`${config.SERVER_URL}/auth/xml`, obj)

  return {
    type: strings.GETTING_XML,
    payload: request
  }
}

export function getPumpsByIds () {
  var request = axios.get(`${config.SERVER_URL}/auth/pumps`)

  return {
    type: strings.GETTING_XML,
    payload: request
  }
}

export function getClientIds (vehicles) {
  var clientsIds = []

  vehicles.forEach(function (vehicle) {
    clientsIds.push({ _id: vehicle.idCliente })
  })
  var request = axios.get(`${config.SERVER_URL}/auth/clients`, clientsIds)

  return {
    type: strings.GETTING_XML,
    payload: request
  }
}

export function getVehiclesByIds (supplies) {
  var vehicleIds = []

  supplies.forEach(function (supply) {
    vehicleIds.push({ _id: supply.idVeiculo })
  })
  var request = axios.get(`${config.SERVER_URL}/auth/vehicles`, vehicleIds)

  return {
    type: strings.GETTING_XML,
    payload: request
  }
}

export function getSuppliesByIds (pumps, startingDate, endingDate) {
  var suppliesIds = {}
  var i = 0
  pumps.forEach((pump) => {
    pump.abastecimentos.forEach((abastecimento) => {
      suppliesIds['key' + i++] = abastecimento
    })
  })
  suppliesIds.startingDate = startingDate
  suppliesIds.endingDate = endingDate
  var request = axios.get(`${config.SERVER_URL}/auth/supplies`, { params: suppliesIds })
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
  var formatterError = {
    title: 'Error',
    body: error.message
  }
  return {
    type: strings.GETTING_XML_FAILURE,
    payload: formatterError
  }
}
