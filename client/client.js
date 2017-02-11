const React = require('react')
const App = require('./pages/app')
const Auth = require('./pages/auth')
const Profile = require('./pages/profile')
const Xml = require('./pages/xml')
import { Provider } from 'react-redux'
const store = require('./store/store')
const { Router, Route, browserHistory } = require('react-router')

const requireAdmin = (nextState, replace) => {
  if (store.getState().authReducer.status !== 'authenticated' || !store.getState().authReducer.user.isAdmin) {
    replace({
      pathname: '/auth',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

/* const requireAuth = (nextState, replace) => {
  if (store.getState().authReducer.status !== 'authenticated') {
    replace({
      pathname: '/auth',
      state: { nextPathname: nextState.location.pathname }
    })
  }
} */

const myRoutes = () => (
  <Route path='/' component={App}>
    <Route path='/auth' component={Auth} />
    <Route path='/xml' component={Xml} onEnter={requireAdmin} />
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
