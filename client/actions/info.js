const axios = require('axios')
const strings = require('./constantStrings')
const config = require('./../config/config')

export function getInfo () {
  var request = axios.get(`${config.SERVER_URL}/auth/info`)
  return {
    type: strings.GETTING_INFO,
    payload: request
  }
}

export function getInfoSuccess (user) {
  return {
    type: strings.GETTING_INFO_SUCCESS,
    payload: user
  }
}

export function getInfoFailure (error) {
  return {
    type: strings.GETTING_INFO_FAILURE,
    payload: error
  }
}
