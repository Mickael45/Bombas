import { token, signIn, logout, INITIAL_STATE, RESET_ERROR } from './../actions/constants/auth'

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case token.ME_FROM_TOKEN:
      return Object.assign({}, state, { user: null, status: 'not authenticated', error: null, loading: true })
    case token.ME_FROM_TOKEN_SUCCESS:
      action.payload.data.user.token = action.payload.data.token
      return Object.assign({}, state, { user: action.payload.data.user, status: 'authenticated', error: null, loading: false })
    case token.ME_FROM_TOKEN_FAILURE:
      return Object.assign({}, state, { user: null, status: 'not authenticated', error: action.payload, loading: false })
    case signIn.SIGNIN:
      return Object.assign({}, state, { user: null, status: 'not authenticated', error: null, loading: true })
    case signIn.SIGNIN_SUCCESS:
      action.payload.data.user.token = action.payload.data.token
      return Object.assign({}, state, { user: action.payload.data.user, status: 'authenticated', error: null, loading: false })
    case signIn.SIGNIN_FAILURE:
      return Object.assign({}, state, { user: null, status: 'not authenticated', error: action.payload, loading: false })
    case RESET_ERROR:
      return Object.assign({}, state, { error: null })
    case logout.RESET_DATA:
      return INITIAL_STATE
    default:
      return state
  }
}

module.exports = authReducer
