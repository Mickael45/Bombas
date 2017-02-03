const React = require('react')
import { Button } from 'react-bootstrap'

const SubmitValidationCodeButton = React.createClass({
  handleSubmitEvent (event) {
  },
  render () {
    return (
      <Button bsStyle='primary' bsSize='large' onClick={this.handleSubmitEvent}>Submit</Button>
    )
  }
})

module.exports = SubmitValidationCodeButton
