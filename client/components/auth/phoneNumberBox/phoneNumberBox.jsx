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
        <ControlLabel>Digite seu número de telemóvel</ControlLabel>
        <FormControl type='text' value={this.state.phoneNumber} placeholder='Número de telemóvel' onChange={this.handlePhoneNumberChange} />
        <FormControl.Feedback />
      </FormGroup>
    )
  }
})

module.exports = PhoneNumberBox
