const React = require('react')
import { Button } from 'react-bootstrap'
const { browserHistory } = require('react-router')

const SubmitUserInfoButton = React.createClass({
  handleSubmitEvent (event) {
    browserHistory.push('/profile')
  },
  render () {
    return (
      <Button bsStyle='primary' onClick={this.handleSubmitEvent}>Enviar</Button>
    )
  }
})

module.exports = SubmitUserInfoButton
