const React = require('react')
const Landing = require('./pages/landing')
const Auth = require('./pages/auth')
const SupplyInfo = require('./pages/supplyInfo')
const Xml = require('./pages/xml')
import { Provider } from 'react-redux'
const store = require('./store/store')
const { Router, Route, hashHistory, IndexRoute } = require('react-router')

const requireAdmin = (nextState, replace) => {
  if (store.getState().authReducer.status !== 'authenticated' || !store.getState().authReducer.user.isAdmin) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const requireAuth = (nextState, replace) => {
  if (store.getState().authReducer.status !== 'authenticated') {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

const myRoutes = () => (
  <Route path='/' component={Landing}>
    <IndexRoute component={Auth} />
    <Route path='/xml' component={Xml} onEnter={requireAdmin} />
    <Route path='/supplyInfo' component={SupplyInfo} onEnter={requireAuth} />
  </Route>
)

const Client = React.createClass({
  render () {
    return (
      <Provider store={store}>
        <Router history={hashHistory}>
          {myRoutes()}
        </Router>
      </Provider>
    )
  }
})

Client.Routes = myRoutes

module.exports = Client
