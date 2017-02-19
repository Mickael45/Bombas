const axios = require('axios')
const { getting, RESET_DATA, RESET_ERROR } = require('./../constants/supply')
const config = require('./../../config/server')

export function getUsersStation (stationId) {
  var request = axios.get(`${config.SERVER_URL}/auth/station/${stationId}`)

  return {
    type: getting.GETTING_SUPPLY_INFO,
    payload: request
  }
}

export function getVehiclesOwner (clientId) {
  var request = axios.get(`${config.SERVER_URL}/auth/client/${clientId}`)

  return {
    type: getting.GETTING_SUPPLY_INFO,
    payload: request
  }
}

export function getVehicle (vehicleId) {
  var request = axios.get(`${config.SERVER_URL}/auth/vehicle/${vehicleId}`)

  return {
    type: getting.GETTING_SUPPLY_INFO,
    payload: request
  }
}

export function getInfoSuccess (obj) {
  return {
    type: getting.GETTING_SUPPLY_INFO_SUCCESS,
    payload: obj
  }
}

export function getInfoFailure (error) {
  var formattedError = {
    title: 'Error',
    body: error.message
  }
  return {
    type: getting.GETTING_SUPPLY_INFO_FAILURE,
    payload: formattedError
  }
}

export function resetData () {
  return {
    type: RESET_DATA
  }
}

export function resetError () {
  return {
    type: RESET_ERROR
  }
}
