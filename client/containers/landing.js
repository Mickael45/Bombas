import { connect } from 'react-redux'
import { meFromToken, meFromTokenSuccess, meFromTokenFailure, resetToken, saveVehicleId } from '../actions/token'
import { browserHistory } from 'react-router'
import Landing from './../components/landing'

const mapDispatchToProps = (dispatch) => ({
  loadUserFromToken (token, vehicleId) {
    if (!token || token === '' || token === 'undefined') {
      if (browserHistory) {
        browserHistory.push('/auth')
      }
      return
    }
    if (vehicleId) {
      dispatch(saveVehicleId(vehicleId))
    }
    dispatch(meFromToken(token))
    .then((response) => {
      if (response.type !== 'ME_FROM_TOKEN') {
        browserHistory.push('/auth')
        return
      }
      if (!response.error) {
        dispatch(meFromTokenSuccess(response.payload))
        if (vehicleId) {
          browserHistory.push('/info')
        } else {
          browserHistory.push('/auth')
        }
      } else {
        dispatch(meFromTokenFailure(response.payload))
      }
    })
  },
  resetMe (dispatch) {
    dispatch(resetToken())
  }
})

const mapStateToProps = (state) => ({
  token: state.authReducer.token
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(Landing)
