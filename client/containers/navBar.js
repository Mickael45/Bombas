import { connect } from 'react-redux'
import { resetUser } from './../actions/phoneSignUp'
import { resetToken } from './../actions/token'
import NavBar from './../components/navigation/navBar'
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
