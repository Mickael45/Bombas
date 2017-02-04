const React = require('react')
import { Button } from 'react-bootstrap'

const SubmitValidationCodeButton = React.createClass({
  handleSubmitEvent (event) {
  },
  render () {
    return (
      <Button bsStyle='primary' onClick={this.handleSubmitEvent}>Enviar</Button>
    )
  }
})

module.exports = SubmitValidationCodeButton
