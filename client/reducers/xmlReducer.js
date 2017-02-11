import { GETTING_XML, GETTING_XML_SUCCESS, GETTING_XML_FAILURE, INITIAL_STATE } from './../actions/constantStrings'

const xmlReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GETTING_XML:
      return Object.assign({}, state, { data: null, status: 'waiting', error: null, loading: true })
    case GETTING_XML_SUCCESS:
      return Object.assign({}, state, { data: action.payload.data, status: 'data', error: null, loading: false })
    case GETTING_XML_FAILURE:
      return Object.assign({}, state, { data: null, status: 'no data', error: action.payload, loading: false })
    default:
      return state
  }
}

module.exports = xmlReducer
