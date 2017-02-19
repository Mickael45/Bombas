const { getting, sending, liters, RESET_DATA, RESET_ERROR, INITIAL_STATE } = require('./../actions/constants/supply')

const infoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case getting.GETTING_SUPPLY_INFO:
      return Object.assign({}, state, { data: null, status: 'getting', error: null, loading: true, liters: '' })
    case getting.GETTING_SUPPLY_INFO_SUCCESS:
      return Object.assign({}, state, { data: action.payload, status: 'data', error: null, loading: false, liters: '' })
    case getting.GETTING_SUPPLY_INFO_FAILURE:
      return Object.assign({}, state, { data: null, status: 'no data', error: action.payload, loading: false, liters: '' })
    case sending.SENDING_SUPPLY:
      return Object.assign({}, state, { data: null, status: 'sending', error: null, loading: true, liters: '' })
    case sending.SENDING_SUPPLY_SUCCESS:
      return Object.assign({}, state, { status: 'data', error: null, loading: false, liters: '' })
    case sending.SENDING_SUPPLY_FAILURE:
      return Object.assign({}, state, { status: 'data', error: action.payload, loading: false, liters: '' })
    case liters.GETTING_LITERS:
      return Object.assign({}, state, { status: 'data', error: null, loading: true, liters: '' })
    case liters.GETTING_LITERS_SUCCESS:
      return Object.assign({}, state, { status: 'data', error: null, loading: false, liters: action.payload })
    case liters.GETTING_LITERS_FAILURE:
      return Object.assign({}, state, { status: 'data', error: action.payload, loading: false, liters: '' })
    case RESET_ERROR:
      return Object.assign({}, state, { error: null })
    case RESET_DATA:
      return INITIAL_STATE
    default:
      return state
  }
}

module.exports = infoReducer
