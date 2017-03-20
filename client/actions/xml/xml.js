const axios = require('axios')
const strings = require('./../constants/xml')
const config = require('./../../config/server')

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
  var vehicleIds = {}

  var i = 0
  supplies.forEach((supply) => {
    vehicleIds['key' + i++] = supply.idVeiculo
  })
  var request = axios.get(`${config.SERVER_URL}/auth/vehicles`, { params: vehicleIds })

  return {
    type: strings.GETTING_XML,
    payload: request
  }
}

export function getSuppliesByIds (pumps, startingDate, endingDate) {
  var supplies = {}
  supplies.startingDate = startingDate
  supplies.endingDate = endingDate
  var request = axios.get(`${config.SERVER_URL}/auth/supplies`, { params: supplies })
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

export function resetData () {
  return {
    type: strings.RESET_DATA
  }
}

export function resetError () {
  return {
    type: strings.RESET_ERROR
  }
}
