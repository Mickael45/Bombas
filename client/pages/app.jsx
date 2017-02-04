const React = require('react')
const { browserHistory } = require('react-router')

class App extends React.Component {
  componentDidMount () {
    browserHistory.push('/auth')
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
  children: React.PropTypes.element
}

module.exports = App
