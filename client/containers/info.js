import { connect } from 'react-redux'
import { getVehicle, resetInfo, getVehiclesOwner, gettingPinVerify, gettingPinVerifySuccess, gettingPinVerifyFailure, getUsersStation, getInfoSuccess, getInfoFailure, sendInfo, sendInfoSuccess, sendInfoFailure } from './../actions/info'
import Info from './../components/info'
const { browserHistory } = require('react-router')

const mapDispatchToProps = (dispatch) => ({
  getInfo (vehicleId, stationId) {
    var obj = {}
    dispatch(getVehicle(vehicleId, stationId))
    .then((response) => {
      if (response.error) {
        dispatch(getInfoFailure(response.payload.response.data))
      } else {
        obj.vehicle = response.payload.data
        dispatch(getVehiclesOwner(obj.vehicle.idCliente))
        .then((response) => {
          if (response.error) {
            dispatch(getInfoFailure(response.payload.response.data))
          } else {
            obj.client = response.payload.data
            dispatch(getUsersStation(stationId))
            .then((response) => {
              if (response.error) {
                dispatch(getInfoFailure(response.payload.response.data))
              } else {
                obj.station = response.payload.data
                dispatch(getInfoSuccess(obj))
              }
            })
          }
        })
      }
    })
  },
  sendInfo (obj, cb) {
    dispatch(sendInfo(obj))
    .then((response) => {
      if (response.error) {
        dispatch(sendInfoFailure(response.payload.response.data))
        cb()
      } else {
        dispatch(sendInfoSuccess())
        cb()
      }
    })
  },
  verifyPin (vehicleId, pin, cb) {
    dispatch(gettingPinVerify(vehicleId, pin))
    .then((response) => {
      if (response.error) {
        dispatch(gettingPinVerifyFailure(response.payload.response.data))
        cb()
      } else {
        dispatch(gettingPinVerifySuccess())
        cb()
      }
    })
  },
  resetInfo () {
    browserHistory.push('/auth')
    dispatch(resetInfo())
  }
})

const mapStateToProps = (state) => {
  var stationId
  if (state.authReducer.user) {
    stationId = state.authReducer.user.posto_id
  }
  return {
    data: state.infoReducer.data,
    status: state.infoReducer.status,
    vehicleId: state.authReducer.vehicleId,
    error: state.infoReducer.error,
    isPinVerified: state.infoReducer.isPinVerified,
    stationId: stationId
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Info)
