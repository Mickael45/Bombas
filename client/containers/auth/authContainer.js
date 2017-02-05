import { connect } from 'react-redux'
import { phoneSignUpUser, phoneValidateUser, phoneResendCode, signUpUserSuccess, signUpUserFailure } from '../../actions/users/phoneSignUp'
import Auth from '../../components/auth/auth'
import { browserHistory } from 'react-router'

let userId

const mapDispatchToProps = (dispatch) => ({
  signMeUpByPhone (phoneNumber, countryCode) {
    var user = {
      countryCode,
      phoneNumber
    }
    dispatch(phoneSignUpUser(user))
    .then((response) => {
      if (response.error) {
        dispatch(signUpUserFailure(response.payload))
      }
    })
  },
  signUpFailed (dispatch, response) {
    dispatch(signUpUserFailure(response.payload))
  },
  validateCode (code) {
    dispatch(phoneValidateUser(code, userId))
    .then((response) => {
      if (!response.error) {
        console.log('---------------Response---------------------')
        console.log(response)
        console.log('---------------End Response-----------------')
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
  }
})

const mapStateToProps = (state) => {
  if (state.authReducer.user) {
    userId = state.authReducer.user._id
  }
  return {
    loading: state.authReducer.loading,
    status: state.authReducer.status
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Auth)
