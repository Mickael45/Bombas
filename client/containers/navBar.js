import { connect } from 'react-redux'
const actions = require('./../actions/logout/logout')
import NavBar from './../components/navigation/navBar'
const { browserHistory } = require('react-router')

const mapDispatchToProps = (dispatch) => ({
  logout () {
    dispatch(actions.logoutUser())
    browserHistory.push('/auth')
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
