import { connect } from 'react-redux'
const token = require('../actions/signIn/token')
const vehicle = require('../actions/vehicle/saveId')
import { hashHistory } from 'react-router'
import Landing from './../components/landing'

const mapDispatchToProps = (dispatch) => ({
  loadUserFromToken (userToken, vehicleId, location) {
    if (vehicleId) {
      dispatch(vehicle.saveId(vehicleId))
    }
    if (!userToken) {
      if (hashHistory) {
        hashHistory.push('/')
      }
      return
    }
    dispatch(token.meFromToken(userToken))
    .then((response) => {
      if (!response.error) {
        dispatch(token.meFromTokenSuccess(response.payload))
        if (location !== '/') {
          return
        } else if (vehicleId) {
          hashHistory.push('/supplyInfo')
        }
      } else {
        dispatch(token.meFromTokenFailure(response.payload))
      }
    })
  }
})

const mapStateToProps = (state) => {
  var token
  if (state.authReducer.user) {
    token = state.authReducer.user.token
  }
  return {
    token
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Landing)
