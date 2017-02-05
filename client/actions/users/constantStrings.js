module.exports = {
  token: { // Get current user(me) from token in localStorage
    ME_FROM_TOKEN: 'ME_FROM_TOKEN',
    ME_FROM_TOKEN_SUCCESS: 'ME_FROM_TOKEN_SUCCESS',
    ME_FROM_TOKEN_FAILURE: 'ME_FROM_TOKEN_FAILURE'
  },
  signUp: { // Sign Up User
    SIGNUP_USER: 'SIGNUP_USER',
    SIGNUP_USER_SUCCESS: 'SIGNUP_USER_SUCCESS',
    SIGNUP_USER_FAILURE: 'SIGNUP_USER_FAILURE',
    WAITING_FOR_VALIDATION_CODE: 'WAITING_FOR_VALIDATION_CODE',
    RESET_USER: 'RESET_USER'
  },
  signIn: { // Sign In User
    SIGNIN_USER: 'SIGNIN_USER',
    SIGNIN_USER_SUCCESS: 'SIGNIN_USER_SUCCESS',
    SIGNIN_USER_FAILURE: 'SIGNIN_USER_FAILURE'
  },
  logout: { // log out user
    LOGOUT_USER: 'LOGOUT_USER'
  },
  INITIAL_STATE: {user: null, status: null, error: null, loading: false, token: null}
}
