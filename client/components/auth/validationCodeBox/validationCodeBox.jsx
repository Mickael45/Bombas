const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const ValidationCodeBox = React.createClass({
  getInitialState () {
    return {
      code: ''
    }
  },
  handleCodeChange (e) {
    this.setState({ code: e.target.value })
  },
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <ControlLabel>Digite o codigo</ControlLabel>
        <FormControl type='text' value={this.state.code} placeholder='codigo' onChange={this.handleCodeChange} />
      </FormGroup>
    )
  }
})

module.exports = ValidationCodeBox
