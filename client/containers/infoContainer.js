import { connect } from 'react-redux'
import { getVehicle, getVehiclesOwner, getUsersStation, getInfoSuccess, getInfoFailure, sendInfo, sendInfoSuccess, sendInfoFailure } from './../actions/info'
import Profile from './../components/profile/profile'

const mapDispatchToProps = (dispatch) => ({
  getInfo (vehicleId, stationId) {
    var obj = {}
    dispatch(getVehicle(vehicleId, stationId))
    .then((response) => {
      if (response.error) {
        dispatch(getInfoFailure(response.payload))
      } else {
        obj.vehicle = response.payload.data
        dispatch(getVehiclesOwner(obj.vehicle.cliente_id))
        .then((response) => {
          if (response.error) {
            dispatch(getInfoFailure(response.payload))
          } else {
            obj.client = response.payload.data
            dispatch(getUsersStation(stationId))
            .then((response) => {
              if (response.error) {
                dispatch(getInfoFailure(response.payload))
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
  sendInfo (obj) {
    dispatch(sendInfo(obj))
    .then((response) => {
      if (response.error) {
        dispatch(sendInfoSuccess(response.payload))
      } else {
        dispatch(sendInfoFailure(response.payload))
      }
    })
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
    stationId: stationId
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(Profile)
