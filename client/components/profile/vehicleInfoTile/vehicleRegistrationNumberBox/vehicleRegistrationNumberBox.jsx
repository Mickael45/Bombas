const React = require('react')
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap'

const VehicleRegistrationNumberBox = React.createClass({
  render () {
    return (
      <FormGroup controlId='formBasicText'>
        <ControlLabel className='fontt'>Matrícula</ControlLabel>
        <FormControl.Static>
          78-BH-98
        </FormControl.Static>
      </FormGroup>
    )
  }
})

module.exports = VehicleRegistrationNumberBox
