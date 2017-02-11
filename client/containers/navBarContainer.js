import { connect } from 'react-redux'
import { resetUser } from './../actions/users/phoneSignUp'
import { resetToken } from './../actions/users/token'
import NavBar from './../components/navBar'
const { browserHistory } = require('react-router')

const mapDispatchToProps = (dispatch) => ({
  logout () {
    dispatch(resetToken())
    browserHistory.push('/auth')
  },
  toSignInStatus () {
    dispatch(resetToken())
  },
  toSignUpStatus () {
    dispatch(resetUser())
  }
})

const mapStateToProps = (state) => {
  var isAdmin
  if (state.authReducer.user) {
    isAdmin = state.authReducer.user.isAdmin
  }
  return {
    status: state.authReducer.status,
    isUserAdmin: isAdmin
  }
}

module.exports = connect(mapStateToProps, mapDispatchToProps)(NavBar)
