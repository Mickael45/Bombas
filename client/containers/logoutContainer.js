import { connect } from 'react-redux'
import { resetUser } from './../actions/users/phoneSignUp'
import NavBar from './../components/navBar'
const { browserHistory } = require('react-router')

const mapDispatchToProps = (dispatch) => ({
  logout () {
    dispatch(resetUser())
    browserHistory.push('./auth')
  }
})

module.exports = connect(null, mapDispatchToProps)(NavBar)
