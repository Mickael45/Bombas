const vehicle = require('./../actions/constants/vehicle')

const vehicleReducer = (state = vehicle.INITIAL_STATE, action) => {
  switch (action.type) {
    case vehicle.GETTING_PIN_VERIFIED:
      return Object.assign({}, state, { isPinVerified: false, status: 'no data', error: null, loading: true })
    case vehicle.GETTING_PIN_VERIFIED_SUCCESS:
      return Object.assign({}, state, { isPinVerified: true, status: 'no data', error: null, loading: false })
    case vehicle.GETTING_PIN_VERIFIED_FAILURE:
      return Object.assign({}, state, { isPinVerified: false, status: 'no data', error: action.payload, loading: false })
    case vehicle.SAVE_ID:
      return Object.assign({}, state, { isPinVerified: false, status: 'vehicleId', error: null, loading: false, vehicleId: action.payload })
    case vehicle.RESET_ERROR:
      return Object.assign({}, state, { error: null })
    case vehicle.RESET_DATA:
      return vehicle.INITIAL_STATE
    default:
      return state
  }
}

module.exports = vehicleReducer
