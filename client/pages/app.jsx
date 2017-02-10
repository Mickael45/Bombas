const React = require('react')
const NavBarContainer = require('./../containers/navBarContainer')
const AppContainer = require('./../containers/appContainer')

class App extends React.Component {
  render () {
    return (
      <div>
        <NavBarContainer />
        <AppContainer vehicleId={this.props.location.query.id}>
          {this.props.children}
        </AppContainer>
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element,
  location: React.PropTypes.object
}

module.exports = App
