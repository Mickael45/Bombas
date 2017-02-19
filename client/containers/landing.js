import { connect } from 'react-redux'
const token = require('../actions/signIn/token')
const vehicle = require('../actions/vehicle/saveId')
import { browserHistory } from 'react-router'
import Landing from './../components/landing'

const mapDispatchToProps = (dispatch) => ({
  loadUserFromToken (userToken, vehicleId) {
    if (vehicleId) {
      dispatch(vehicle.saveId(vehicleId))
    }
    if (!userToken) {
      if (browserHistory) {
        browserHistory.push('/auth')
      }
      return
    }
    dispatch(token.meFromToken(userToken))
    .then((response) => {
      if (!response.error) {
        dispatch(token.meFromTokenSuccess(response.payload))
        if (vehicleId) {
          browserHistory.push('/supplyInfo')
        } else {
          browserHistory.push('/waiting')
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
