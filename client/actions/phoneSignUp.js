const axios = require('axios')
import { signUp } from './constants/auth'
const config = require('./../config/server')

export function phoneSignUpUser (user) {
  var request = axios.post(`${config.SERVER_URL}/auth/phone`, user)
  return {
    type: signUp.WAITING_FOR_VALIDATION_CODE,
    payload: request
  }
}

export function phoneSignInUser (user) {
  var request = axios.post(`${config.SERVER_URL}/auth/phone/signIn`, user)
  return {
    type: signUp.SIGNUP_USER,
    payload: request
  }
}

export function phoneValidateUser (code, userId) {
  var request = axios.post(`${config.SERVER_URL}/auth/phone/${userId}/verify`, {code})
  return {
    type: signUp.SIGNUP_USER,
    payload: request
  }
}

export function phoneResendCode (userId) {
  var request = axios.get(`${config.SERVER_URL}/auth/phone/${userId}/resend`)
  return {
    type: signUp.WAITING_FOR_VALIDATION_CODE,
    payload: request
  }
}

export function signUpUserSuccess (user) {
  return {
    type: signUp.SIGNUP_USER_SUCCESS,
    payload: user
  }
}

export function signUpUserFailure (error) {
  var formattedError = {
    title: 'Error',
    body: error.message
  }
  return {
    type: signUp.SIGNUP_USER_FAILURE,
    payload: formattedError
  }
}

export function resetUser () {
  return {
    type: signUp.RESET_USER
  }
}