const React = require('react')
import { Button } from 'react-bootstrap'
const { browserHistory } = require('react-router')

const SubmitButton = React.createClass({
  handleSubmitEvent (event) {
    browserHistory.push('/auth')
  },
  render () {
    return (
      <Button bsStyle='primary' bsSize='large' onClick={this.handleSubmitEvent}>Submit</Button>
    )
  }
})

module.exports = SubmitButton
