const axios = require('axios')
const strings = require('./constants/info')
const config = require('./../config/server')

export function getUsersStation (stationId) {
  var request = axios.get(`${config.SERVER_URL}/auth/station/${stationId}`)

  return {
    type: strings.GETTING_INFO,
    payload: request
  }
}

export function getVehiclesOwner (clientId) {
  var request = axios.get(`${config.SERVER_URL}/auth/client/${clientId}`)

  return {
    type: strings.GETTING_INFO,
    payload: request
  }
}

export function getVehicle (vehicleId) {
  var request = axios.get(`${config.SERVER_URL}/auth/vehicle/${vehicleId}`)

  return {
    type: strings.GETTING_INFO,
    payload: request
  }
}

export function getInfoSuccess (obj) {
  return {
    type: strings.GETTING_INFO_SUCCESS,
    payload: obj
  }
}

export function getInfoFailure (error) {
  var formattedError = {
    title: 'Error',
    body: error.message
  }
  return {
    type: strings.GETTING_INFO_FAILURE,
    payload: formattedError
  }
}

export function sendInfo (obj) {
  var request = axios.post(`${config.SERVER_URL}/auth/info`, obj)
  return {
    type: strings.SENDING_INFO,
    payload: request
  }
}

export function sendInfoSuccess () {
  return {
    type: strings.SENDING_INFO_SUCCESS
  }
}

export function sendInfoFailure (err) {
  return {
    type: strings.SENDING_INFO_FAILURE,
    payload: err
  }
}

export function gettingPinVerify (vehicleId, pin) {
  var request = axios.post(`${config.SERVER_URL}/auth/vehicle/${vehicleId}/verify`, {pin})

  return {
    type: strings.GETTING_PIN_VERIFIED,
    payload: request
  }
}

export function gettingPinVerifySuccess () {
  return {
    type: strings.GETTING_PIN_VERIFIED_SUCCESS
  }
}

export function gettingPinVerifyFailure (error) {
  var formattedError = {
    title: 'Error',
    body: error.message
  }
  return {
    type: strings.GETTING_PIN_VERIFIED_FAILURE,
    payload: formattedError
  }
}

export function resetInfo () {
  return {
    type: strings.RESET_INFO
  }
}
