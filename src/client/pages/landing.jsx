const React = require('react')
const NavBarContainer = require('./../containers/navBar')
const LandingContainer = require('./../containers/landing')

class LandingPage extends React.Component {
  render () {
    return (
      <div>
        <NavBarContainer />
        <LandingContainer vehicleId={this.props.location.query.id}>
          {this.props.children}
        </LandingContainer>
      </div>
    )
  }
}

LandingPage.propTypes = {
  children: React.PropTypes.element,
  location: React.PropTypes.object
}

module.exports = LandingPage
