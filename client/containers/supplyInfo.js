import { connect } from 'react-redux'
const supply = require('./../actions/supply/getInfo')
const liters = require('./../actions/supply/getLiters')
const vehicle = require('./../actions/vehicle/verifyPin')
const update = require('./../actions/supply/update')
const supplyInfo = require('./../components/supplyInfo')
const { hashHistory } = require('react-router')

const mapDispatchToProps = (dispatch) => ({
  getInfo (vehicleId, stationId) {
    var obj = {}
    dispatch(supply.getVehicle(vehicleId, stationId))
    .then((response) => {
      if (response.error) {
        dispatch(supply.getInfoFailure(response.payload.response.data))
      } else if (!response.payload.data.activo) {
        dispatch(supply.getInfoFailure({ message: 'Este veiculo não esta activo' }))
      } else {
        obj.vehicle = response.payload.data
        dispatch(supply.getVehiclesOwner(obj.vehicle.idCliente))
        .then((response) => {
          if (response.error) {
            dispatch(supply.getInfoFailure(response.payload.response.data))
          } else {
            obj.client = response.payload.data
            dispatch(supply.getUsersStation(stationId))
          .then((response) => {
            if (response.error) {
              dispatch(supply.getInfoFailure(response.payload.response.data))
            } else {
              obj.station = response.payload.data
              dispatch(supply.getInfoSuccess(obj))
            }
          })
          }
        })
      }
    })
  },
  getSupplyLiters (bombaId, stationId, cb) {
    var obj = {
      stationId,
      bombaId
    }
    dispatch(liters.getSupplyLiters(obj))
    .then((response) => {
      if (response.error) {
        dispatch(liters.getSupplyLitersFailure(response.payload.response.data))
        cb()
      } else {
        dispatch(liters.getSupplyLitersSuccess(response.payload.data))
        cb()
      }
    })
  },
  sendInfo (obj) {
    dispatch(update.sendInfo(obj))
    .then((response) => {
      if (response.error) {
        dispatch(update.sendInfoFailure(response.payload.response.data))
      } else {
        dispatch(update.sendInfoSuccess())
        hashHistory.push('/')
      }
    })
  },
  verifyPin (vehicleId, pin, cb) {
    dispatch(vehicle.gettingPinVerify(vehicleId, pin))
    .then((response) => {
      if (response.error) {
        dispatch(vehicle.gettingPinVerifyFailure(response.payload.response.data))
        cb()
      } else {
        dispatch(vehicle.gettingPinVerifySuccess())
        cb()
      }
    })
  },
  resetVehicleError () {
    dispatch(vehicle.resetError())
  },
  resetSupplyInfoError (error) {
    var errorMessage = error.body
    dispatch(supply.resetError())
    if (errorMessage === 'Este veiculo não esta activo') {
      hashHistory.push('/')
    }
  }
})

const mapStateToProps = (state) => {
  var obj = {}
  if (state.supplyInfoReducer.error) {
    obj.error = state.supplyInfoReducer.error
    obj.type = 'supply'
  } else if (state.vehicleReducer.error) {
    obj.error = state.vehicleReducer.error
    obj.type = 'vehicle'
  }
  var loading
  if (state.supplyInfoReducer.loading) {
    loading = state.supplyInfoReducer.loading
  } else if (state.vehicleReducer.loading) {
    loading = state.vehicleReducer.loading
  }
  var postoId
  if (state.authReducer.user) {
    postoId = state.authReducer.user.posto_id
  }
  return {
    data: state.supplyInfoReducer.data,
    loading: loading,
    status: state.supplyInfoReducer.status,
    vehicleId: state.vehicleReducer.vehicleId,
    error: obj,
    isPinVerified: state.vehicleReducer.isPinVerified,
    stationId: postoId,
    liters: state.supplyInfoReducer.liters
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(supplyInfo)
