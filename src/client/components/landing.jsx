const React = require('react')
const { func, element, string, object } = React.PropTypes

class LandingComponent extends React.Component {
  componentWillMount () {
    this.props.loadUserFromToken(this.props.token, this.props.vehicleId, this.props.children.props.location.pathname)
  }
  render () {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

LandingComponent.propTypes = {
  children: element,
  loadUserFromToken: func.isRequired,
  token: string,
  vehicleId: string,
  location: object
}

module.exports = LandingComponent
