import axios from 'axios'
import { token } from './constantStrings'
const config = require('./../../config/config')

export function meFromToken (tokenFromStorage) {
  const request = axios({
    method: 'get',
    url: `${config.SERVER_URL}/auth/users/from/${tokenFromStorage}`,
    headers: {
      'Authorization': `Bearer ${tokenFromStorage}`
    }
  }).catch(function (err) {
    return meFromTokenFailure(err)
  })
  return {
    type: token.ME_FROM_TOKEN,
    payload: request
  }
}

export function meFromTokenSuccess (currentUser) {
  return {
    type: token.ME_FROM_TOKEN_SUCCESS,
    payload: currentUser
  }
}

export function meFromTokenFailure (error) {
  return {
    type: token.ME_FROM_TOKEN_FAILURE,
    payload: error
  }
}

export function resetToken () {
  return {
    type: token.RESET_TOKEN
  }
}
