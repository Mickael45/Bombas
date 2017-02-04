const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const PhoneNumberBox = React.createClass({
  getInitialState () {
    return {
      phoneNumber: ''
    }
  },
  getPhoneNumberValidationState () {
    const length = this.state.phoneNumber.length
    if (length === 9) {
      return 'success'
    } else if (length > 0) {
      return 'error'
    }
  },
  handlePhoneNumberChange (e) {
    this.setState({ phoneNumber: e.target.value })
  },
  render () {
    return (
      <FormGroup controlId='formBasicText' validationState={this.getPhoneNumberValidationState()}>
        <ControlLabel className='fontt'>Telemóvel</ControlLabel>
        <FormControl type='text' value={this.state.phoneNumber} placeholder='Número de telemóvel' className='tile' onChange={this.handlePhoneNumberChange} />
        <FormControl.Feedback />
      </FormGroup>
    )
  }
})

module.exports = PhoneNumberBox
