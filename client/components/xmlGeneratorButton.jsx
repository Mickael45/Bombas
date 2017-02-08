const React = require('react')
const { func } = React.PropTypes
const { Button } = require('react-bootstrap')

const DefaultButton = React.createClass({
  propTypes: {
    getXml: func
  },
  onSubmit () {
    this.props.getXml()
  },
  render () {
    return (
      <Button bsStyle='primary'
        onClick={this.onSubmit}>
        XML
      </Button>
    )
  }
})

module.exports = DefaultButton