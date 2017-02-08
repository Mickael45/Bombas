import { connect } from 'react-redux'
import { phoneSignInUser, phoneSignUpUser, phoneValidateUser, phoneResendCode, signUpUserSuccess, signUpUserFailure } from '../../actions/users/phoneSignUp'
import Auth from '../../components/auth/auth'
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
        dispatch(signUpUserFailure(response.payload))
      }
    })
  },
  validateCode (code) {
    dispatch(phoneValidateUser(code, userId))
    .then((response) => {
      if (!response.error) {
        dispatch(signUpUserSuccess(response.payload))
        browserHistory.push('/profile')
      } else {
        dispatch(signUpUserFailure(response.payload))
      }
    })
  },
  resendCode () {
    dispatch(phoneResendCode(userId))
    .then((response) => {
      if (response.error) {
        dispatch(signUpUserFailure(response.payload))
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
      console.log(response)
      if (!response.error) {
        dispatch(signUpUserSuccess(response.payload))
        browserHistory.push('/profile')
      } else {
        dispatch(signUpUserFailure(response.payload))
      }
    })
  }
})

const mapStateToProps = (state) => {
  console.log(state)
  if (state.authReducer.user) {
    userId = state.authReducer.user._id
  }
  return {
    loading: state.authReducer.loading,
    status: state.authReducer.status
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Auth)
