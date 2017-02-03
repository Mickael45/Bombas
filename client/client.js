const React = require('react')
const App = require('./pages/app')
const { Router, Route, browserHistory } = require('react-router')

const Client = React.createClass({
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App} />
      </Router>
    )
  }
})

module.exports = Client
