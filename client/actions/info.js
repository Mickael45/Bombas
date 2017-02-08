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

export function sendInfo (distance) {
  var request = axios.post(`${config.SERVER_URL}/auth/info`)
  return {
    type: strings.SENDING_INFO,
    payload: request
  }
}

export function sendInfoSuccess (data) {
  return {
    type: strings.SENDING_INFO_SUCCESS,
    payload: data
  }
}

export function sendInfoFailure (err) {
  return {
    type: strings.SENDING_INFO_FAILURE,
    payload: err
  }
}
