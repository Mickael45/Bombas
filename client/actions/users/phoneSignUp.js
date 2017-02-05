// const axios = require('axios')
import { signUp } from './constantStrings'
// const config = require('./../../config/.developmentConfig')

export function phoneSignUpUser (formValues) {
  // var request = axios.post(`${config.SERVER_URL}/auth/phone`, formValues)
  var request = 'ACTION = > phone sign up user'
  console.log(request)
  return {
    type: signUp.WAITING_FOR_VALIDATION_CODE,
    payload: request
  }
}

export function phoneValidateUser (code, userId) {
  // var request = axios.post(`${config.SERVER_URL}/auth/phone/${userId}/verify`, {code})
  var request = 'ACTION = > phone validate user'
  console.log(request)
  return {
    type: signUp.SIGNUP_USER,
    payload: request
  }
}

export function phoneResendCode (userId) {
  // var request = axios.get(`${config.SERVER_URL}/auth/phone/${userId}/resend`)
  var request = 'ACTION = > phone resend code'
  console.log(request)
  return {
    type: signUp.WAITING_FOR_VALIDATION_CODE,
    payload: request
  }
}

export function signUpUserSuccess (user) {
  var request = ' ACTION => sign up success'
  console.log(request)
  return {
    type: signUp.SIGNUP_USER_SUCCESS,
    payload: user
  }
}

export function signUpUserFailure (error) {
  var request = 'ACTION = > sign up user failure'
  console.log(request)
  return {
    type: signUp.SIGNUP_USER_FAILURE,
    payload: error
  }
}
