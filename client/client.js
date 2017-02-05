const React = require('react')
const App = require('./pages/app')
const Auth = require('./pages/auth')
const Profile = require('./pages/profile')
import { Provider } from 'react-redux'
const store = require('./store/store')
const { Router, Route, browserHistory } = require('react-router')

const myRoutes = () => (
  <Route path='/' component={App}>
    <Route path='/auth' component={Auth} />
    <Route path='/profile' component={Profile} />
  </Route>
)

const Client = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
})

Client.Routes = myRoutes

module.exports = Client
