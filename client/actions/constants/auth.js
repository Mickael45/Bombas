module.exports = {
  token: {
    ME_FROM_TOKEN: 'ME_FROM_TOKEN',
    ME_FROM_TOKEN_SUCCESS: 'ME_FROM_TOKEN_SUCCESS',
    ME_FROM_TOKEN_FAILURE: 'ME_FROM_TOKEN_FAILURE'
  },
  signIn: {
    SIGNIN: 'SIGNIN_USER',
    SIGNIN_SUCCESS: 'SIGNIN_USER_SUCCESS',
    SIGNIN_FAILURE: 'SIGNIN_USER_FAILURE'
  },
  logout: {
    RESET_DATA: 'RESET_DATA'
  },
  RESET_ERROR: 'RESET_ERROR',
  INITIAL_STATE: { user: null, status: 'no data', error: null, loading: false }
}
