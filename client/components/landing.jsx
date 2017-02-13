const React = require('react')
const { func, element, string } = React.PropTypes

class LandingComponent extends React.Component {
  componentWillMount () {
    this.props.loadUserFromToken(this.props.token, this.props.vehicleId)
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
  vehicleId: string
}

module.exports = LandingComponent
