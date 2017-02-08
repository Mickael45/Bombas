const axios = require('axios')
const strings = require('./constantStrings')
const config = require('./../config/config')
const jsonHelper = require('./../helpers/jsonHelper')

export function sendXmlToServer (obj) {
  var request = axios.get(`${config.SERVER_URL}/auth/xml`, obj)

  return {
    type: strings.GETTING_XML,
    payload: request
  }
}

const getClientIds = (obj, cb) => {
  var clientsIds = []

  obj.vehicles.forEach(function (vehicle) {
    clientsIds.push({ _id: vehicle.cliente_id })
  })
  axios.get(`${config.SERVER_URL}/auth/clients`, clientsIds)
  .then((response) => {
    if (response.error) {
      return getXmlFailure()
    }
    obj.clients = response.data
    cb(obj, sendXmlToServer)
  })
}

const getVehiclesIds = (obj, cb) => {
  var vehicleIds = []

  obj.supplies.forEach(function (supply) {
    vehicleIds.push({ _id: supply.veiculo_id })
  })
  axios.get(`${config.SERVER_URL}/auth/vehicles`, vehicleIds)
  .then((response) => {
    if (response.error) {
      return getXmlFailure()
    }
    obj.vehicles = response.data
    cb(obj, jsonHelper.createJson)
  })
}

const getSuppliesIds = (obj, cb) => {
  var stationsIds = []

  obj.stations.forEach(function (station) {
    stationsIds.push({ _id: station.Abastecimento })
  })
  axios.get(`${config.SERVER_URL}/auth/supplies`, stationsIds)
  .then((response) => {
    if (response.error) {
      return getXmlFailure()
    }
    obj.supplies = response.data
    cb(obj, getClientIds)
  })
}

export function getXml () {
  var obj = {}
  var request = axios.get(`${config.SERVER_URL}/auth/stations`)
  .then((response) => {
    if (response.error) {
      return getXmlSuccess(response.error)
    }
    obj.stations = response.data
    getSuppliesIds(obj, getVehiclesIds)
  })
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
