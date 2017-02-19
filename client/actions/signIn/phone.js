const axios = require('axios')
import { signIn, RESET_ERROR } from './../constants/auth'
const config = require('./../../config/server')

export function signInUser (user) {
  var request = axios.post(`${config.SERVER_URL}/auth/phone/signIn`, user)
  return {
    type: signIn.SIGNIN,
    payload: request
  }
}

export function signInSuccess (user) {
  return {
    type: signIn.SIGNIN_SUCCESS,
    payload: user
  }
}

export function signInFailure (err) {
  var formattedError = {
    title: 'Error',
    body: err.message
  }
  return {
    type: signIn.SIGNIN_FAILURE,
    payload: formattedError
  }
}

export function resetError () {
  return {
    type: RESET_ERROR
  }
}
