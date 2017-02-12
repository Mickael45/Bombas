import { connect } from 'react-redux'
import { phoneSignInUser, phoneSignUpUser, phoneValidateUser, phoneResendCode, signUpUserSuccess, signUpUserFailure } from './../actions/phoneSignUp'
import Auth from './../components/auth'
import { browserHistory } from 'react-router'

let userId

const mapDispatchToProps = (dispatch) => ({
  signMeUpByPhone (phoneNumber, countryCode, birthDate) {
    var user = {
      countryCode,
      phoneNumber,
      password: birthDate.split('/').join('')
    }
    dispatch(phoneSignUpUser(user))
    .then((response) => {
      if (response.error) {
        dispatch(signUpUserFailure(response.payload.response.data))
      }
    })
  },
  validateCode (code) {
    dispatch(phoneValidateUser(code, userId))
    .then((response) => {
      if (!response.error) {
        dispatch(signUpUserSuccess(response.payload))
        browserHistory.push('/info')
      } else {
        dispatch(signUpUserFailure(response.payload.response.data))
      }
    })
  },
  resendCode () {
    dispatch(phoneResendCode(userId))
    .then((response) => {
      if (response.error) {
        dispatch(signUpUserFailure(response.payload.response.data))
      }
    })
  },
  signMeInByPhone (phoneNumber, password) {
    var user = {
      phoneNumber,
      password
    }
    dispatch(phoneSignInUser(user))
    .then((response) => {
      if (!response.error) {
        dispatch(signUpUserSuccess(response.payload))
        browserHistory.push('/info')
      } else {
        dispatch(signUpUserFailure(response.payload.response.data))
      }
    })
  }
})

const mapStateToProps = (state) => {
  if (state.authReducer.user) {
    userId = state.authReducer.user._id
  }
  return {
    loading: state.authReducer.loading,
    status: state.authReducer.status,
    error: state.authReducer.error
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Auth)
