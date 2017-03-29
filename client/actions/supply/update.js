const axios = require('axios')
const { sending } = require('./../constants/supply')
const config = require('./../../config/server')

export function sendInfo (obj) {
  var request = axios.post(`${config.SERVER_URL}/auth/updateSupply`, obj)
  return {
    type: sending.SENDING_SUPPLY_INFO,
    payload: request
  }
}

export function sendInfoSuccess () {
  return {
    type: sending.SENDING_SUPPLY_INFO_SUCCESS
  }
}

export function sendInfoFailure (error) {
  var formattedError = {
    title: 'Error',
    body: error.message
  }
  return {
    type: sending.SENDING_SUPPLY_INFO_FAILURE,
    payload: formattedError
  }
}
