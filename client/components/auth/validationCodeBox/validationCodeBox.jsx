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
        <ControlLabel className='fontt'>Digite o código</ControlLabel>
        <FormControl type='text' className='tile' value={this.state.code} placeholder='Código' onChange={this.handleCodeChange} />
      </FormGroup>
    )
  }
})

module.exports = ValidationCodeBox
