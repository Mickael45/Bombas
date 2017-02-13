const strings = require('./../actions/constants/xml')

const infoReducer = (state = strings.INITIAL_STATE, action) => {
  switch (action.type) {
    case strings.GETTING_INFO:
      return Object.assign({}, state, { data: null, status: 'waiting', error: null, loading: true })
    case strings.GETTING_INFO_SUCCESS:
      return Object.assign({}, state, { data: action.payload, status: 'data', error: null, loading: false })
    case strings.GETTING_INFO_FAILURE:
      return Object.assign({}, state, { data: null, status: 'no data', error: action.payload, loading: false })
    case strings.SENDING_INFO:
      return Object.assign({}, state, { data: null, status: 'waiting', error: null, loading: true })
    case strings.SENDING_INFO_SUCCESS:
      return Object.assign({}, state, { isPinVerified: false, status: 'data', error: null, loading: false })
    case strings.SENDING_INFO_FAILURE:
      return Object.assign({}, state, { status: 'data', isPinVerified: false, error: action.payload, loading: false })
    case strings.GETTING_PIN_VERIFIED:
      return Object.assign({}, state, { isPinVerified: false, status: 'waiting', error: null, loading: true })
    case strings.GETTING_PIN_VERIFIED_SUCCESS:
      return Object.assign({}, state, { isPinVerified: true, status: 'data', error: null, loading: false })
    case strings.GETTING_PIN_VERIFIED_FAILURE:
      return Object.assign({}, state, { isPinVerified: false, status: 'data', error: action.payload, loading: false })
    case strings.RESET_INFO:
      return strings.INITIAL_STATE
    default:
      return state
  }
}

module.exports = infoReducer
