const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const RegistrationCountryBox = React.createClass({
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <ControlLabel className='fontt'>País emissor da matrícula</ControlLabel>
        <FormControl.Static>
          Portugal
        </FormControl.Static>
      </FormGroup>
    )
  }
})

module.exports = RegistrationCountryBox
