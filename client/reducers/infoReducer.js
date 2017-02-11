import { GETTING_INFO, GETTING_INFO_SUCCESS, GETTING_INFO_FAILURE, SENDING_INFO, SENDING_INFO_SUCCESS, SENDING_INFO_FAILURE, INITIAL_STATE } from './../actions/constantStrings'

const infoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETTING_INFO:
      return Object.assign({}, state, { data: null, status: 'waiting', error: null, loading: true })
    case GETTING_INFO_SUCCESS:
      return Object.assign({}, state, { data: action.payload, status: 'data', error: null, loading: false })
    case GETTING_INFO_FAILURE:
      return Object.assign({}, state, { data: null, status: 'no data', error: action.payload, loading: false })
    case SENDING_INFO:
      return Object.assign({}, state, { data: null, status: 'waiting', error: null, loading: true })
    case SENDING_INFO_SUCCESS:
      return Object.assign({}, state, { data: action.payload.data, status: 'data', error: null, loading: false })
    case SENDING_INFO_FAILURE:
      return Object.assign({}, state, { data: null, status: 'no data', error: action.payload, loading: false })
    default:
      return state
  }
}

module.exports = infoReducer
