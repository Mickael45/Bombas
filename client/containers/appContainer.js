import { connect } from 'react-redux'
import { meFromToken, meFromTokenSuccess, meFromTokenFailure, resetToken } from '../actions/users/token'
import { browserHistory } from 'react-router'
import App from '../components/app'

const mapDispatchToProps = (dispatch) => ({
  loadUserFromToken (token) {
    if (!token || token === '' || token === 'undefined') {
      browserHistory.push('/auth')
      return
    }
    dispatch(meFromToken(token))
    .then((response) => {
      if (response.type !== 'ME_FROM_TOKEN') {
        browserHistory.push('/auth')
        return
      }
      if (!response.error) {
        dispatch(meFromTokenSuccess(response.payload))
        browserHistory.push('/profile')
      } else {
        dispatch(meFromTokenFailure(response.payload))
        browserHistory.push('/auth')
      }
    })
  },
  resetMe (dispatch) {
    dispatch(resetToken())
  }
})

const mapStateToProps = (state) => ({
  token: state.authReducer.token
})

module.exports = connect(mapStateToProps, mapDispatchToProps)(App)
