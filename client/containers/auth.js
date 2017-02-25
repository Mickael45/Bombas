import { connect } from 'react-redux'
const phone = require('./../actions/signIn/phone')
import Auth from './../components/auth'
import { hashHistory } from 'react-router'

const mapDispatchToProps = (dispatch) => ({
  signMeInByPhone (phoneNumber, password, vehicleId) {
    var user = {
      phoneNumber,
      password
    }
    dispatch(phone.signInUser(user))
    .then((response) => {
      if (response.error) {
        dispatch(phone.signInFailure(response.payload.response.data))
      } else {
        dispatch(phone.signInSuccess(response.payload))
        if (vehicleId) {
          hashHistory.push('/supplyInfo')
        }
      }
    })
  },
  resetError () {
    dispatch(phone.resetError())
  }
})

const mapStateToProps = (state) => {
  return {
    vehicleId: state.vehicleReducer.vehicleId,
    loading: state.authReducer.loading,
    status: state.authReducer.status,
    error: state.authReducer.error
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Auth)
