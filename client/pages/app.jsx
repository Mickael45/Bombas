const React = require('react')
const { browserHistory } = require('react-router')
const NavBar = require('./../components/navBar')

class App extends React.Component {
  componentDidMount () {
    browserHistory.push('/auth')
  }
  render () {
    return (
      <div>
        <NavBar />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.element
}

module.exports = App
