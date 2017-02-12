import strings from './../actions/constants/xml'

const xmlReducer = (state = strings.INITIAL_STATE, action) => {
  switch (action.type) {
    case strings.GETTING_XML:
      return Object.assign({}, state, { data: null, status: 'waiting', error: null, loading: true })
    case strings.GETTING_XML_SUCCESS:
      return Object.assign({}, state, { data: action.payload.data, status: 'data', error: null, loading: false })
    case strings.GETTING_XML_FAILURE:
      return Object.assign({}, state, { data: null, status: 'no data', error: action.payload, loading: false })
    default:
      return state
  }
}

module.exports = xmlReducer
