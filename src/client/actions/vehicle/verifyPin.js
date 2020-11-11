const axios = require('axios')
const strings = require('./../constants/vehicle')
const config = require('./../../config/server')

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
    type: strings.RESET_DATA
  }
}

export function resetError () {
  return {
    type: strings.RESET_ERROR
  }
}
