const React = require('react')
import { Button } from 'react-bootstrap'
const { browserHistory } = require('react-router')

const ResendValidationCodeButton = React.createClass({
  handleSubmitEvent (event) {
    browserHistory.push('/auth')
  },
  render () {
    return (
      <Button bsStyle='primary' onClick={this.handleSubmitEvent}>Novo código</Button>
    )
  }
})

module.exports = ResendValidationCodeButton
