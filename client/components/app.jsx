const React = require('react')
const { func, element, string } = React.PropTypes

class App extends React.Component {
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

App.propTypes = {
  children: element,
  loadUserFromToken: func.isRequired,
  token: string,
  vehicleId: string
}

module.exports = App
