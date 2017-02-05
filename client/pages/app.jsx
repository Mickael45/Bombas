const React = require('react')
const NavBarContainer = require('./../containers/navBarContainer')
const AppContainer = require('./../containers/appContainer')

class App extends React.Component {
  render () {
    return (
      <div>
        <NavBarContainer />
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
