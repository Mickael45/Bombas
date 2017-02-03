const React = require('react')
const App = require('./pages/app')
const Auth = require('./pages/Auth')
const { Router, Route, browserHistory } = require('react-router')

const Client = React.createClass({
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App} />
        <Route path='/auth' component={Auth} />
      </Router>
    )
  }
})

module.exports = Client
