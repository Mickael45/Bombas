const React = require('react')
const Landing = require('./pages/landing')
const Auth = require('./pages/auth')
const Info = require('./pages/info')
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
  <Route path='/' component={Landing}>
    <Route path='/auth' component={Auth} />
    <Route path='/xml' component={Xml} onEnter={requireAdmin} />
    <Route path='/info' component={Info} />
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
