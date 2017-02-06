import { token, signUp, INITIAL_STATE } from './../../actions/users/constantStrings'

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case token.ME_FROM_TOKEN: // loading currentUser("me") from jwttoken in local/session storage storage,
      return Object.assign({}, state, { user: null, status: 'not authenticated', error: null, loading: true, token: '' })
    case token.ME_FROM_TOKEN_SUCCESS: // return user, status = authenticated and make loading = false
      return Object.assign({}, state, { user: action.payload.data.user, status: 'authenticated', error: null, loading: false, token: action.payload.data.token }) // <-- authenticated
    case token.ME_FROM_TOKEN_FAILURE: // return error and make loading = false
      var tokenError = action.payload.data || { message: action.payload.message }
      return Object.assign({}, state, { user: null, status: 'not authenticated', error: tokenError, loading: false, token: '' }) // 2nd one is network or server down errors
    case token.RESET_TOKEN:
      return Object.assign({}, state, { user: null, status: 'not authenticated', error: '', loading: false, token: '' })
    case signUp.WAITING_FOR_VALIDATION_CODE:
      if (action.error) {
        return state
      }
      var user = !action.payload.data.user ? state.user : action.payload.data.user
      return Object.assign({}, state, { user: user, status: 'waiting', error: null, loading: false, token: '' })
    case signUp.SIGNUP_USER:
      return Object.assign({}, state, { user: null, status: 'waiting', error: null, loading: true, token: '' })
    case signUp.SIGNUP_USER_SUCCESS:
      return Object.assign({}, state, { user: action.payload.data.user, status: 'authenticated', error: null, loading: false, token: action.payload.data.token })
    case signUp.SIGNUP_USER_FAILURE:
      var signUpError = action.payload.data || { message: action.payload.message }
      return Object.assign({}, state, { user: null, status: 'not subscribed', error: signUpError, loading: false, token: '' })
    case signUp.RESET_USER:
      return INITIAL_STATE
    default:
      return state
  }
}

module.exports = authReducer
