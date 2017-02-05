const React = require('react')
const NavBar = require('./../components/navBar')
const AppContainer = require('./../containers/appContainer')

class App extends React.Component {
  render () {
    return (
      <div>
        <NavBar />
        <AppContainer>
          {this.props.children}
        </AppContainer>
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element
}

module.exports = App
