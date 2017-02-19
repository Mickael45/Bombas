import axios from 'axios'
import { liters } from './../constants/supply'
const config = require('./../../config/server')

export function getSupplyLiters (obj) {
  var request = axios.get(`${config.SERVER_URL}/auth/supply/lastSupplyQuantity`, { params: obj })

  return {
    type: liters.GETTING_LITERS,
    payload: request
  }
}

export function getSupplyLitersSuccess (data) {
  return {
    type: liters.GETTING_LITERS_SUCCESS,
    payload: data.toString()
  }
}

export function getSupplyLitersFailure (error) {
  var formattedError = {
    title: 'Error',
    body: error.message
  }
  return {
    type: liters.GETTING_LITERS_FAILURE,
    payload: formattedError
  }
}
